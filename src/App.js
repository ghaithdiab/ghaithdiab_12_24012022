import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import UserPage from './Pages/UserPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/user/:id" element={<UserPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
