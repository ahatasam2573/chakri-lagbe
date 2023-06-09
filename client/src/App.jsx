import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard, Register, Error, Landing } from './pages'
import './App.css'

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter >

  )
}

export default App
