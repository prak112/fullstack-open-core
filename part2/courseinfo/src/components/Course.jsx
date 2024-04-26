export function Header({text}) {
    return (
        <>
        <div>
            <h1>{text}</h1>
        </div>
        </>
    )
}

function Part({name, exercises}) {
    return(
        <>
        <p>{name} : {exercises}</p>
        </>
    )
}

function Content({parts}) {
    //console.log(parts);
    return(
        <>
        {parts.map((part) => 
            <Part key={part.id} name={part.name} exercises={part.exercises} />)
        }
        </>
    )
}

function Total({parts}) {
    //console.log(props);
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
    return(
        <>
        <p><b>Total Exercises : {totalExercises}</b></p>
        </>
    )
}

export function Course({course}) {
    return (
        <>
        <div>
            <Header text = { course.name }/>
            <Content parts = { course.parts }  />
            <Total parts = { course.parts }/>
        </div>
        </>
    )
}