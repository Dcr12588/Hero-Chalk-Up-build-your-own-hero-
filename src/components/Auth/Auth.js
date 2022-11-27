import React, { useState } from 'react'

const Auth = () => {

    const [register,setRegister] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div> 
            <h1> Welcome to Hero Chalk Up! {register ? 'Register' : "Login"}</h1>
            {register ? (
                <div>
                    <form>
                    <input placeholder='username' onChange = {e => setUsername(e.target.value)} value={username}/>
                    <input placeholder='password' onChange = {e => setPassword(e.target.value)} value={password}/>
                </form>
                </div>
            ) : (
                <div>
                <form>
                    <input placeholder='username' onChange = {e => setUsername(e.target.value)} value={username}/>
                    <input placeholder='password' onChange = {e => setPassword(e.target.value)} value={password}/>
                </form>
                </div>
            )}

            <button onClick={() => setRegister(!register)}>{register ? 'Login' : "Register"}</button>
        </div>
    )
}

export default Auth;