import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import AuthContext from '../../store/authContext';

const Header = () => {

    const authCtx = useContext(AuthContext)
    return (
        <div className='nav'>Hero Chalk Up
            <nav className='links'>
            <NavLink to ="/"> Home  </NavLink>
            <NavLink to ="/auth"> Auth </NavLink>
            <NavLink to ="/addhero"> Add Hero </NavLink>
            <NavLink to ="/myhero"> My Hero </NavLink>
            </nav>
            <button onClick= {() => authCtx.logout()}>Logout</button>
        </div>
    )
}

export default Header;