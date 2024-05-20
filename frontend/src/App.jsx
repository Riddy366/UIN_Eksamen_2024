import Home from './components/Home'
import Type from './components/Type'
import Teams from './components/Teams'
import Pokemon from './components/Pokemon'
import SearchResult from './components/SearchResult'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'


//Lagde routing
function App() {
    return (
      <Layout>
        <Routes>
          <Route index element={<Home />} />
            <Route path="pokemons/:pokemonName" element={<Pokemon />} />
            <Route path="/:type" element={<Type />} />
            <Route path="teams" element={<Teams/>} />
            <Route path="searchresults/:query" element={<SearchResult />} />
        </Routes>
      </Layout>
    )
}

export default App;
