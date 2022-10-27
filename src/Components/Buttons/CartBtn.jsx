import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = () => {
  // We get a state of added items from file name handleCart
  const state = useSelector((state) => state.handleCart)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary ms-2"><i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>

    </>
  )
}

export default CartBtn