// src/App.jsx

import './App.css'
import { useState } from 'react';

const App = () => {

  const [cityInput, setCityInput] = useState('')

  const handleChange =(event) => {
    setCityInput(event.target.value)
  }
  return (
    <>
      <h1>Enter the City</h1>
      <label htmlFor="cityInput">City: </label>
      <input 
        type="text" 
        name="cityInput" 
        id="cityInput"
        value={cityInput}
        onChange={handleChange}
      />
    </>
  );
};

export default App;
