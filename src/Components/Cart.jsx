import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { delCart } from '../redux/action/index'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delCart(item))
    }
    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 m-5" key={cartItem.id} >
                <div className="container py-4">
                    
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-uppercase text-black-50">{cartItem.category}</h5>
                            <h2>{cartItem.title.substring(0, 25)}</h2>
                            <p className="lead fw-bold">$ {cartItem.price}</p>
                            <button onClick={() => handleClose(cartItem)} className="btn btn-outline-danger w-40 justify-content-center">Delete from Cart</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-3">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const button = () =>{
        return(
            <div className="container">
                <div className="row">
                    <NavLink to="/checkout" className="btn btn-outline-warning mb-5 w-25 fs-5 mx-auto">Proceed to Checkout</NavLink>
                    <NavLink to="/products" className="btn btn-outline-primary mb-5 w-25 fs-5 mx-auto">Shop more Products</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    )
}

export default Cart