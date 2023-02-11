import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header()
{
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>

					<Navbar.Brand href="#home">Blog</Navbar.Brand>
			        <Navbar.Toggle />
			        <Navbar.Collapse className="justify-content-end">
			        	<Link to="/" className="custom-nav">Home</Link>
			        	<Link to="/add-product" className="custom-nav">Add Product</Link>
						<Link to="/update-product" className="custom-nav">Update Product</Link>
						<Link to="/login" className="custom-nav">Login</Link>
						<Link to="/register" className="custom-nav">Register</Link>
			        </Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
		)
}

export default Header