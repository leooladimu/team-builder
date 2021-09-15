import React, { useState } from 'react'
import './App.css';
import Form from './Form';
// import Team from './Team';

const initialFormValues = {
  teamMate: '',
  email: '',
  role: '',
}

export default function App() {
  console.log('where is this thing'); 

  // const [teamMates] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues);

  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
 
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
 
    const newTeamMate = {
      teamMate: formValues.teamMate.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newTeamMate.teamMate || !newTeamMate.email || !newTeamMate.role) {
      setError("Fill out the form.");
      return;
    }
  }

  return (
    <div className='container'>
      <h1>Team App</h1>
      {error && <h3 className="error">{error}</h3>}
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
    </div>
  )
}
