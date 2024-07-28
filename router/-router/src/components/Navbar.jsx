import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <div>
        <nav>
            <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/Home">
                <li>Home</li>
            </NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/About">
                <li>About</li>
            </NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to="/Login">
                <li>Login</li>
            </NavLink>
            <NavLink className={(e)=>{return e.isActive ? "red" : ""}} to='/User'>
                <li>User</li>
            </NavLink>
        </nav>
    </div>
  )
}

export default Navbar
