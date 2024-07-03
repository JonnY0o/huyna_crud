
import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './Create'
import Update from './Update'
Create
// import Home from './Home'
// import Update from './Update'
// import UserReducer from './UserReducer'
// import Create from './Create'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Update />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
