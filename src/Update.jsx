import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'




function Update() {
    const { id } = useParams()
    const users = useSelector((state) => state.users)
    // console.log(users);
    const existingUser = users.filter(f => f.id == id)
    // console.log(users);
    // console.log(existingUser[0]);
    const { name, email } = existingUser[0]
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        // dispatch(updateUser)({
        //     id: id,
        //     name: uname,
        //     email: uemail
        // })
        navigate('/')
    }
    
    return (
        <div>
            <div className="">
                <h3>Update User</h3>
                <form onSubmit={handleUpdate} >
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='form-control' placeholder=' enter Nmae'
                            value={uname} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='form-control' placeholder=' enter Email'
                            value={uemail} onChange={e => setEmail(e.target.value)} />
                    </div><br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update