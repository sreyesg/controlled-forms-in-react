// src/App.jsx

// import the useState() hook
import { useState } from 'react';

const App = () => {
  // add placeholder text for the title
  // we'll use the form to update this state by the end of this lesson
  const [title, setTitle] = useState('The full name will appear here.');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ''
  })
  
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]:event.target.value});
    
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setTitle(`your name is ${formData.firstName} ${formData.lastName}`)
    setFormData({firstName: '', lastName: ''})

  }


  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input 
          id="firstName" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleChange}
          />
        <label htmlFor="lastName">Last Name: </label>
        <input 
          id="lastName" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleChange}
          />
          <button type="submit">Submit</button>
      </form>

    </>
  );
};

export default App;
