import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>Hero Chalk Up
            <nav>
            <NavLink to ="/"> Home  </NavLink>
            <NavLink to ="/auth"> Auth </NavLink>
            <NavLink to ="/addhero"> Add Hero </NavLink>
            <NavLink to ="/myhero"> My Hero </NavLink>
            </nav>
        </div>
    )
}

export default Header;