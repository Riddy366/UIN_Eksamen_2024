import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Type from './components/Type';
import TypeDetails from './components/Typedetails';

//Lagde routing
function App() {
    return (
        <Routes>
            <Route path="/types/:typeName" element={<TypeDetails />} />
            <Route path="/" element={<Type />} />
        </Routes>
    );
}

export default App;
