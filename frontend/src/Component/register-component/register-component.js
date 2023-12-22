import React, { useState } from 'react'
import './register-component.css';
import { useNavigate } from 'react-router-dom';

const RegisterComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const btnHandleSignup = async () => {

        if (!name || !email || !password) {
            setError(true);
            return false;
        }

        let result = await fetch("http://localhost:3500/signup", {

            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        result = await result.json();
        if (result) {
            alert("SignUp Successfully...!");
            console.log(result)
            setName('');
            setPassword('');
            setEmail('');

            navigate("/login");
        } else {
            alert("Some Error");
        }
    }
    return (
        <div className='userRegister'>
            <h2>User Register</h2>
            <div>
                <input type="text" className='form-control w-25' placeholder="Enter User Name" required value={name} onChange={(e) => setName(e.target.value)} />
                {error && !name && <span className="errorMsg">Name is required</span>}
                <input type="text" className='form-control w-25' placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.target.value)} />
                {error && !email && <span className="errorMsg">Email is required</span>}
                <input type="password" className='form-control w-25' placeholder="Enter Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {error && !password && <span className="errorMsg">Password is required</span>}
            </div>

            <button className="btnSignup form-control w-25 btn btn-outline-info" onClick={btnHandleSignup}>SignUp</button>
        </div>
    )
}

export default RegisterComponent;