import React from 'react';
import Clock from './components/Clock'; 
import StopWatch from './components/StopWatch';
import './App.css';

function App() {
  
  return (
    <div className="container">
      <Clock locale="en-BD"/>
      <StopWatch/>
    </div>
  );
}

export default App;