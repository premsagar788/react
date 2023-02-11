import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { render } from "react-dom";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/update-product" element={<UpdateProduct />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
