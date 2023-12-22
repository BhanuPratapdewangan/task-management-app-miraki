import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login-component.css';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const Navigate = useNavigate();

    const btnHandleLogin = async () => {
        console.log(email, password);

        if (!email || !password) {
            setError(true)
            return false
        }

        let data = await fetch("http://localhost:3500/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })

        data = await data.json();
        console.log(data);

        localStorage.setItem('token', JSON.stringify(data.auth));
        localStorage.setItem('user', JSON.stringify(data.data));

        if (data.auth) {
            alert("Login Successfully...!");
            Navigate("/");
        } else {
            alert("Incorrect input");
        }

    }
    return (
        <div className='userLogin'>
            <h2>Login</h2>
            <div>
                <input type="text" className='form-control w-25' placeholder="Enter Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && !email && <span className="errorMsg">Email is required</span>}
                <input type="password" className='form-control w-25' placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && !password && <span className="errorMsg">Password is required</span>}

                <button className="btnSignup form-control w-25 btn btn-outline-info" onClick={btnHandleLogin}>Login</button>
            </div>
        </div>
    )
}

export default LoginComponent;