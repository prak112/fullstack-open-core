import { useState } from 'react'


function Title({text}){
  return(
    <>
      <h1>{text}</h1>
    </>
  )
}

function Button({ handleClick, text }) {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

function StatisticLine({text, value}){
  return (
    <>
      <p>{text} : {value}</p>
    </>
  )
}

function Statistics({good, neutral, bad}) {
  const averageFeedback = ((+neutral / (+good + +neutral + +bad))).toFixed(1);
  const positiveFeedback = ((+good / (+good + +neutral + +bad)) * 100).toFixed(1);

  if (good === 0 && neutral === 0 & bad === 0 ){
    return (
      <>
      <div>No Feedback given</div>
      </>
    )
  }
  else {
    return (
      <>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Average" value={averageFeedback} />
        <StatisticLine text="Positive" value={`${positiveFeedback}%`} />
      </>
    )
  } 
}



// Parent/Top-level Component
export default function App() {
  // save feedback clicks
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const newGood = good + 1;
    setGood(newGood);
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
  }

  const handleBadClick = () => {
    const newBad = bad + 1;
    setBad(newBad);
  }

  return(
    <>
      <Title text="Give Feedback"/>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Title text="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}
