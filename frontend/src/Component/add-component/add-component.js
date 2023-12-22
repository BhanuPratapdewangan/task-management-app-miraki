
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddComponent = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const user = localStorage.getItem('user');

  const btnHandleAdd = async () => {

    let result = await fetch("http://localhost:3500/add-task", {
      method: "POST",
      body: JSON.stringify({ title, description, completed, user }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })

    if (!title || !description) {
      setError(true);
      return false;
    }

    result = await result.json();
    if (result) {
      setTitle('');
      setDescription('');
      alert("Add Task Successfully...!");
      navigate('/add');
    } else {
      alert("Some Error");
    }

  }

  return (
    <div className='container mt-5'>
      <h2>Add Task</h2>
      <div className='d-flex flex-wrap justify-content-around mt-4'>
        <div>
          <input type="text" className='form-control w-100' placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
          {error && !title && <span className='errorMsg'>Title is required</span>}
        </div>
        <div>
          <input type="text" className='form-control w-100' placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
          {error && !description && <span className='errorMsg'>Description is required</span>}
        </div>
        <div>
          <input type="checkbox" className='form-check-input' value={completed} onChange={(e) => setCompleted(e.target.checked)}></input>
        </div>

        <button classtitle="btnAddProduct" className='btn btn-outline-info' onClick={btnHandleAdd}>Add Task</button>
      </div>
    </div>
  )
}

export default AddComponent;