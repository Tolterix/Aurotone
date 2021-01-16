import React from 'react';
import './Login.css'

export default function Login(){
    return (
        <>       
            <div className='form'>
                <h1 className="test">Login</h1>
                <form id ="login">
                    <label>Email </label>
                    <br/>
                    <input className="email" type="email" placeholder="user@.mil"/>
                    <br/>
                    <label>Password: </label>
                    <br/>
                    <input className="password" type="password" placeholder="8-16 Characters"/>
                    <br/>
                    <button type="submit" className="login-button">Login</button>
                    <br/>
                    <div className="register">Register for an account</div>
                    <div className="forgot-password">Forgot Password</div>
                </form>
            </div>          
        </>
    )
}
