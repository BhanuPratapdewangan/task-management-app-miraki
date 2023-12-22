import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ListComponent from '../list-component/list-component.js';

const UpdateComponent = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);

  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getTaskDetails();
  }, []);

  const getTaskDetails = async () => {
    let data = await fetch(`http://localhost:3500/get-task/${param.id}`, {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    data = await data.json();
    setTitle(data.title);
    setDescription(data.description);
    setCompleted(data.completed)
  }

  // const handleChange = (data) => {
  //   if(data.completed !== false){
  //     setCompleted();
  //   }
  // }

  const btnHandleUpdate = async () => {
    let data = await fetch(`http://localhost:3500/update-task/${param.id}`, {
      method: "PUT",
      body: JSON.stringify({ title, description, completed }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })

    data = await data.json();
    if (data) {
      alert("Task Updated");
      setTitle('');
      setDescription('');
      setCompleted(false);
      navigate('/home');
    } else {
      alert('Data not updated');
    }
  }
  return (
    <div className='container mt-5'>
      <h2>Update Task</h2>
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

        <button classtitle="btnAddProduct" className='btn btn-outline-info' onClick={btnHandleUpdate}>Update Task</button>
      </div>

      <ListComponent />
    </div>
  )
}

export default UpdateComponent;