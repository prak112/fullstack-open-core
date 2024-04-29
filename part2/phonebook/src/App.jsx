import { useState } from 'react'
import { Filter, PersonForm, Persons } from './components/components'

export default function App() {
  const persons = [
    { id: 0, name: "Ambassador Spock", number: "56414-456-55221123" },
    { id: 1, name: "Mojo Jojo", number: "992-211-33456" },
    { id: 2, name: "Grim Reaper", number: "010-000-0001" },
    { id: 3, name: "Pika Pika", number: "777-8778-9879" },
    { id: 4, name: "Ada Lovelace", number: "39-44-5323523" },
    { id: 5, name: "Dan Abramov", number: "12-43-234345" },
    { id: 6, name: "Mary Poppendieck", number: "39-23-6423122" }
  ]

  // state variables and setters
  const [originalPersons, setOriginalPersons] = useState(persons)
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

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
