import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResults } from './components/SearchResult';

function App() {

  const [results, setResults] = useState ([]);
  return (
      <div className="App">
        <section className="search-bar-container">
          <SearchBar setResults={setResults}/>
          <SearchResults results={results}/>
        </section>
      </div>
  )
}

export default App
