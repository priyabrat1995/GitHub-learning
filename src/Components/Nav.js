import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagDashFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Nav = () => {
  const {totalQuantities}=useSelector(state=>state.CartReducer)
  return (
    <div className='nav'>
        <div className="container">
            <div className="nav__container">
                <div className="nav__left">
                   <Link to="/"> <img className='logo' src="/Images/Logo.png" alt="" /></Link>
                </div>
                <div className="nav__right">
                  <Link to="/cart">
                    <div className="basket">
                      <BsFillBagDashFill className='cart-icon'/>
                      <span className=''>{totalQuantities}</span>
                    </div>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav