import { useState, useEffect } from 'react'
import { Filter, PersonForm, Persons } from './components/components'
import axios from 'axios'

export default function App() {
  // state variables and setters
  const [originalPersons, setOriginalPersons] = useState([])
  const [filteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  // axios GET request from db.json
  const serverUrl = 'http://localhost:3001/persons'
  const hook = () => {
    console.log('Effect initiated')
    axios
      .get(serverUrl)
      .then((response) => {
          console.log('Promise complete');
          console.log(response.data);
          setOriginalPersons(response.data);
          setFilteredPersons(response.data);
        }
      )
  }
  useEffect(hook, []);
    

  // new contact
  const addContact = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: originalPersons.length,
    }
    // validate
    if(originalPersons.some(person => person.name === newName)){
      alert(`${newName} is already in the Phonebook!`);
    }
    else{
      setOriginalPersons(originalPersons.concat(nameObject));
      setFilteredPersons(originalPersons.concat(nameObject));
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  // search
  const handleSearchResult = (event) => {
    let searchString = event.target.value
    setNewSearch(searchString);
    const regexp = new RegExp(searchString, 'i'); // case insensitive
    const searchResult = originalPersons.filter(person => regexp.test(person.name))
    console.log(...searchResult);
    searchString ? setFilteredPersons([...searchResult]) : setFilteredPersons(originalPersons);
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter searchTerm={newSearch} handleSearchResult={handleSearchResult} />
      <h2>Add New Contact</h2>    
        <PersonForm name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} handleSubmit={addContact} />
      <h2>People</h2>
        <Persons personsList={filteredPersons}/>
    </div>
  )
}
