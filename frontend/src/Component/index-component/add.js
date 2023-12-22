import React, { useEffect } from 'react'
import AddComponent from '../add-component/add-component.js';
import ListComponent from '../list-component/list-component.js';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    })
    return (
        <div>
            <AddComponent />
            <div className='mt-5'></div>
            <ListComponent />
        </div>
    )
}

export default Add;