

import Home from './components/Home'
import Type from './components/Type'
import Teams from './components/Teams'
import Pokemon from './components/Pokemon'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TypeDetails from './components/Typedetails';

//Lagde routing
function App() {
    return (
        <Routes>

          <Route index element={<Home />} />
            <Route path="pokemon/:pokemonName" element={<Pokemon />} />
            <Route path="/:type" element={<Type />} />
          <Route path="teams" element={<Teams/>} />
            <Route path="/types/:typeName" element={<TypeDetails />} />
            <Route path="/" element={<Type />} />
        </Routes>
    )
}

export default App;
