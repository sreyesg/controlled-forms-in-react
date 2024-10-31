// src/App.jsx

// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.');
  const [firstName, setFirstName] = useState('')
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
    
  }
  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input 
          id="firstName" 
          name="firstName" 
          value={firstName}
          onChange={handleFirstNameChange}
          />
      </form>
    </>
  );
};

export default App;
