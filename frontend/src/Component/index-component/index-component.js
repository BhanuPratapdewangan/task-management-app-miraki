import React from 'react'
import './index-component.css';
import { Link, useNavigate } from 'react-router-dom';

const IndexComponent = () => {

    let auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className=''>
            <div className='d-flex flex-wrap justify-content-between' id='navbar'>
                <img src='https://mirakitech.com/assets/images/logo-dark.png' className='m-2' alt='logo' width={120} height={50} />

                {auth ?
                    <ul className="nav-bar">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
                        <li>Welcome {JSON.parse(auth).name}  </li>
                    </ul>

                    :

                    <ul className="nav-bar nav-left">
                        <li><Link to='/landing-page'>Home</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                    
                }

            </div>
        </div>
    )
}

export default IndexComponent;