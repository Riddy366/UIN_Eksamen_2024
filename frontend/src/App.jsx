
import Home from './components/Home'
import Type from './components/Type'
import Teams from './components/Teams'
import Pokemon from './components/Pokemon'
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
        <Routes>
          <Route index element={<Home />} />
            <Route path="id" element={<Pokemon />} />
          <Route path="type" element={<Type/>} />
          <Route path="teams" element={<Teams/>} />
        </Routes>
    </>
  )
}

export default App
