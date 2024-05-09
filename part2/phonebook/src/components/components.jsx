/* eslint-disable react/prop-types */

export function NotificationMessage({ message, type}){
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginBottom: 10, 
        textAlign: 'center'
    }
    const failStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
        marginBottom: 10, 
        textAlign: 'center'
    }
    const notificationStyle = type === 'success' ? successStyle : failStyle

    if(message === null) { return null }
    else {
        return(
            <>
            <div style={notificationStyle}>
                {message}
            </div>
            </>
        )
    }
}

export function Filter({ searchTerm, handleSearchResult }){
    return (
        <>
        <div>
        Search for : <input value={searchTerm} type='search' onChange={handleSearchResult} />
        </div> 
        </>
    )
}
  
export function ContactForm({ name, handleName, number, handleNumber, handleSubmit  }) {
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            Name: &ensp;&ensp;<input value={name} type='text' onChange={handleName} />
            </div>
            <div>
            Number : <input value={number} type='tel' onChange={handleNumber} />
            </div>
            <div>
            <button type="submit">Add</button>
            </div>
        </form>    
        </>
    )
}

export function Contacts({contactsList, deleteContact}) {
    return (
        <>
        <ul>
            { contactsList.map((contact) =>
                <li key={contact.id}>
                    <b>{contact.name} :</b>  {contact.number} &ensp;
                    <button onClick={() => deleteContact(contact)}>delete</button>
                </li>
                ) 
            }
        </ul>    
        </>
    )
}

export function Footer(){
    const footerStyle = {
        color: 'blue',
        fontSize: 16,
        background: 'darkgrey',
        padding: 10,
        margin: 'auto',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center'
    }

    return (
        <>
        <footer style={footerStyle}>
            <pre>
                Phonebook app | Created by Prakirth Govardhanam, MIT License 
            </pre>
        </footer>
        </>
    )

}
