import React from 'react'
import CartBtn from './Buttons/CartBtn'
import Login from './Buttons/Login'
import Signup from './Buttons/Signup'
import { NavLink } from 'react-router-dom'
//import { useSelector } from 'react-redux'


const Navbar = () => {
    //const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid py-2 ">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-primary" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-warning" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-warning" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-warning" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand fw-bold text-info mx-auto fs-3" to="/">PRODUCTS COLLECTION</NavLink>
                        <Login />
                        <Signup />
                        <CartBtn/>
                    </div>
                    {/*<div className="buttons">
                        <button className="btn">
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2"><i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>
                        </button>
                    </div>*/}
                </div>
            </nav>
        </div>
    )
}

export default Navbar