import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <img style={{ width: '30%' }} src={logo} alt='react' />
      <button onClick={handleClick}>Click me</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
