import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import "./Scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
