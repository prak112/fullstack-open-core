import { useState, useEffect } from 'react'
import { NotificationMessage, Filter, ContactForm, Contacts, Footer } from './components/components'
import phonebookService from './services/phonebook'
import { errorDisplay, resetNotifications } from './utils/notificationUtils'

export default function App() {
  // state variables and setters
  const [originalContacts, setOriginalContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState('success');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }


  // Handle CRUD operations using HTTP requests via phonebook.js to db.json
  // render all contacts
  const hook = () => {
    phonebookService
      .getAll()
      .then((initialContacts) => {
        setOriginalContacts(initialContacts);
        setFilteredContacts(initialContacts);
      })      
      .catch(error => {
        errorDisplay(error, setNotification, setNotificationType);
        resetNotifications(setNotification, setNotificationType);
      })
  }
  useEffect(hook, []);
    

  // new contact
  const addContact = (event) => {
    event.preventDefault();
    const generateUniqueId = () => {
      const maxId = originalContacts.reduce((max, contact) => Math.max(max, +contact.id), 0)
      return maxId + 1
    }
    const contactObject = {
      name: newName,
      number: newNumber,  
      id: String(generateUniqueId())
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
        setNotification(`Updated ${modifiedContact.name}'s number`);
        resetNotifications(setNotification, setNotificationType);
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
        setNotification(`Added '${contactObject.name}'`);
        resetNotifications(setNotification, setNotificationType);
      })
      .catch(error => {
        errorDisplay(error, setNotification, setNotificationType);
        resetNotifications(setNotification, setNotificationType);
      })
    }    
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
    .catch(error => {
      console.error(error);
      setNotification(`Oops! "${contactToUpdate.name}" has already been removed from server.`);
      setNotificationType('fail');
      resetNotifications(setNotification, setNotificationType);
      // refresh contacts list
      hook();
    })
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
        setNotification(`Deleted '${contactToDelete.name}'`);
        resetNotifications(setNotification, setNotificationType);
      })
      .catch(error => {
        errorDisplay(error, setNotification, setNotificationType);
        resetNotifications(setNotification, setNotificationType);
        // refresh contacts list
        hook();
      })
  }

  return (
    <div>
      <h1>Phonebook</h1>
        <NotificationMessage message={notification} type={notificationType}/>
        <Filter searchTerm={newSearch} handleSearchResult={handleSearchResult} />
      <h2>Add New Contact</h2>    
        <ContactForm name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange} handleSubmit={addContact} />
      <h2>People</h2>
        <Contacts contactsList={filteredContacts} deleteContact={deleteContact}/>
      <Footer />
    </div>
  )
}
