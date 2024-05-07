import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'

function App() {

  const [results, setResults] = useState ([]);
  return (
      <div className="App">
        <section className="search-bar-container">
          <SearchBar />
          <h1>SearchResults</h1>
        </section>
      </div>
  )
}

export default App
