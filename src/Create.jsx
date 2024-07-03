import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }
    return (
        <div>
            <div className="">
                <h3>Add new User</h3>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='form-control' placeholder=' enter Nmae'
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='form-control' placeholder=' enter Email'
                            onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>
    )
}
