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
            <button type='submit'>Add</button>
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