import { useState, useEffect } from 'react'
import { Filter, ContactForm, Contacts } from './components/components'
import phonebookService from './services/phonebook'

export default function App() {
  // state variables and setters
  const [originalContacts, setOriginalContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');

  // Handle HTTP requests via phonebook.js to db.json
  const hook = () => {
    phonebookService
      .getAll()
      .then((initialContacts) => {
        setOriginalContacts(initialContacts);
        setFilteredContacts(initialContacts);
      })
  }
  useEffect(hook, []);
    

  // new contact
  const addContact = (event) => {
    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
      id: String(originalContacts.length + 1),
    }
    // validate or update
    if(originalContacts.some(contact => contact.name === newName)){
      if(window.confirm(`${newName} is already in the Phonebook. Would you like to update their number ?`)) {
        const repeatedContact = originalContacts.find(contact => contact.name === newName)
        const modifiedContact = {
          ...repeatedContact,
          name: newName,
          number: newNumber,
        }
        update(modifiedContact);
      }
    }
    else{
      // update backend server
      phonebookService
      .create(contactObject)
      .then(addedContact => {
        setOriginalContacts(originalContacts.concat(addedContact));
        setFilteredContacts(originalContacts.concat(addedContact));
        setNewName('');
        setNewNumber('');
      })
    }    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  // search contacts
  const handleSearchResult = (event) => {
    let searchString = event.target.value
    setNewSearch(searchString);
    const regexp = new RegExp(searchString, 'i'); // case insensitive
    const searchResult = originalContacts.filter(person => regexp.test(person.name))
    searchString ? setFilteredContacts([...searchResult]) : setFilteredContacts(originalContacts);
  }

  // remove existing contact
  const deleteContact = (contactToDelete) => {
    phonebookService
      .remove(contactToDelete.id)
      .then(() => { 
        setFilteredContacts(filteredContacts.filter(contact => contact.id !== contactToDelete.id));
        setOriginalContacts(originalContacts.filter(contact => contact.id !== contactToDelete.id));
      })
  }

  // update existing contact
  const update = (contactToUpdate) => {
    phonebookService
    .update(contactToUpdate.id, contactToUpdate)
    .then(updatedContact => {
      setFilteredContacts(filteredContacts.map(contact => contact.id !== updatedContact.id ? contact : updatedContact))
      setOriginalContacts(originalContacts.map(contact => contact.id !== updatedContact.id ? contact : updatedContact))
      setNewName('');
      setNewNumber('');
    })
  }


  return (
    <div>
      <h1>Phonebook</h1>
        <Filter searchTerm={newSearch} handleSearchResult={handleSearchResult} />
      <h2>Add New Contact</h2>    
        <ContactForm name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} handleSubmit={addContact} />
      <h2>People</h2>
        <Contacts contactsList={filteredContacts} deleteContact={deleteContact}/>
    </div>
  )
}
