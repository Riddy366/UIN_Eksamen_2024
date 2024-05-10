import { useState } from 'react'

import Home from './components/Home'

import './App.css'
import { SearchBar } from './components/SearchBar'

function App() {

  return (
      <div className="App">
        <Home/>
     
        <section className="search-bar-container">
          <SearchBar />
          <h1>SearchResults</h1>
        </section>
      </div>
  )
}

export default App
