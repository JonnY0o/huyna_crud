import { createSlice } from "@reduxjs/toolkit";
import Update from "./Update";



const userSlice = createSlice({
    name: 'users',
    initialState: [
        {
            name: 'jonny',
            email: 'jonnywvs@gmail.com',
            id: 1
        },
        {
            name: 'dsadsa',
            email: 'sdasdsa@gmail.com',
            id: 2
        },
        {
            name: 'qwewqe',
            email: 'qeqwew@gmail.com',
            id: 3
        },
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)

        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const uu = state.find(user => user.id == id)
            if (uu) {
                uu.name = name

                uu.email = email
            }
            // state = state.map(item => {
            //     if (item.id == id) {
            //         item.name = name,
            //             item.email = email
            //         return item
            //     } else {
            //         return item
            //     }
            // })
        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const uu = state.find(user => user.id == id)
            if(uu){
                return state.filter( f => f.id !== id)
            }
        }
    }

})


export const { addUser, updateUser, deleteUser } = userSlice.actions
export default userSlice.reducer