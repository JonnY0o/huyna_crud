
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';



export default function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    console.log(users);
    return (
        <div>
            <div className=" container">
                <h2>JonnY's</h2>
                <Link to='/create' className='btn'>create</Link>
                <table className=' table'>
                    <thead className=''>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className=' flex gap-10'>
                                    <Link to={`/edit/${user.id}`} className=''>Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className=''>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
