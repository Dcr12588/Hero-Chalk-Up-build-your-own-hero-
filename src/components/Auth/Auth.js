import React, { useState,useContext } from 'react';
import axios from 'axios';

import AuthContext from '../../store/authContext'

const Auth = () => {

    const [register,setRegister] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const authCtx = useContext(AuthContext)

    const handleAuth = (e) => {
        e.preventDefault()
        const body = {username,password}
        axios.post(`${register ? '/register' : '/login' }`, body)
        .then(res => {
            console.log (res.data)
            console.log(authCtx)
            const {token, exp, userId, username}=res.data
            authCtx.login(token, exp, userId, username)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='login_card'> 
        <h1 className='login_register_toggle'>  {register ? 'Register' : "Login"}</h1>
        <h2 className='welcome_message'>Welcome to Hero Chalk Up!</h2>
            {register ? (
                <div className='login_text'>
                    <form onSubmit={e => handleAuth(e)}>
                    <input placeholder='username' onChange = {e => setUsername(e.target.value)} value={username}/>
                    <input placeholder='password' onChange = {e => setPassword(e.target.value)} value={password}/>
                    <button>Join the Heroes</button>
                </form>
                </div>
            ) : (
                <div className='register_text'>
                <form onSubmit={e => handleAuth(e)}>
                    <input placeholder='username' onChange = {e => setUsername(e.target.value)} value={username}/>
                    <input placeholder='password' onChange = {e => setPassword(e.target.value)} value={password}/>
                    <button>Join the Heroes</button>
                </form>
                </div>
            )}

            <button className='login_registerBtn' onClick={() => setRegister(!register)}>{register ? 'Login' : "Register"}</button>
        </div>
    )
}

export default Auth;