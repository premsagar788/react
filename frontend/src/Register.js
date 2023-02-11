import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register()
{
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	async function signUp()
	{
		let item={name,email,password}
		console.warn(item)

		let result = await fetch("http://127.0.0.1:8000/api/register", {
			method: "POST",
			body: JSON.stringify(item),
			headers: {
				"Content-Type" : "application/json",
				"Accept" : "application/json",
			}
		});

		result = await result.json();
		console.warn("result", result);
		localStorage.setItem("user-info", JSON.stringify(result));
		navigate('/home');

	}


	return (
		<div className = "col-sm-6 offset-sm-3">
			<h1>Register Page</h1>
			<div className="form-row pb-2">
				<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Enter Name" />
			</div>
			<div className="form-row pb-2">
				<input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
			</div>
			<div className="form-row pb-2">
				<input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter password" />
			</div>
			<button onClick={signUp} className="btn btn-primary">Sign Up</button>
		</div>
	)
}

export default Register