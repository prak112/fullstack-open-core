export function Filter({ searchTerm, handleSearchResult }){
    return (
        <>
        <div>
        Search for : <input value={searchTerm} type='search' onChange={handleSearchResult} />
        </div> 
        </>
    )
    }
  
export function PersonForm({ name, handleName, number, handleNumber, handleSubmit  }) {
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

export function Persons({personsList}) {
    return (
        <>
        <ul>
            { personsList.map((person) => 
                <li key={person.id}>
                    <b>{person.name} :</b>  {person.number}
                </li>
            ) 
            }
        </ul>    
        </>
    )
}