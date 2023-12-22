import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ListComponent = () => {

    const [newList, setNewList] = useState({ title: '', description: '', completed: false });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        LoadTaskList();
    }, []);

    const LoadTaskList = async () => {

        let data = await fetch("http://localhost:3500/task-list", {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        data = await data.json();
        setNewList(data);
    }

    const btnHandleDelete = async (id) => {

        let data = await fetch(`http://localhost:3500/delete-task/${id}`, {

            method: "DELETE",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })

        data = await data.json();
        if (data) {
            alert("Record deleted");
            LoadTaskList();
        } else {
            alert("Id is not correct");
        }
    }

    return (
        <div className='container mt-5'>
            <table className='table table-hover mt-5'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Complition</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        newList.length > 0 ? newList.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{(item.completed) == true ? <input type="checkbox" readOnly className="form-check-input" disabled checked style={{ backgroundColor: "green", color: "white" }} /> : <input type="checkbox" className="form-check-input" disabled style={{ backgroundColor: "", color: "white" }} />}</td>
                                <td>
                                    <button onClick={() => btnHandleDelete(item._id)} className="btn btn-danger"><span className='bi bi-trash'></span></button>
                                    <Link to={'/update-task/' + item._id} className="btn btn-primary ms-4"><span className='bi bi-pen'></span></Link>
                                </td>
                            </tr>

                        )
                            :
                            <td className="not-found">Data not found</td>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListComponent;