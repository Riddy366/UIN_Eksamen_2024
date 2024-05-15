import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Type from './components/Type';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Type />} />  
          <Route path="/types/:typeName" element={<Type />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
