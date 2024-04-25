import { useState } from 'react'

function Title({text}) {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

function Button({handleClick, text}) {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

function Display({text}) {
  return (
    <>
      <div>{ text }</div>
    </>
  )
}


// Parent/Top-level Component
export default function App () {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // global variables
  const totalAnecdotes = anecdotes.length;

  // state variables and setters
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(Array(totalAnecdotes).fill(0));

  // event handler functions
  const handleNextAnecdote = () => {
    const randomSelect = Math.floor(Math.random() * totalAnecdotes);
    setSelected(randomSelect);
  }

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVote(newVotes);
  }

  // most voted anecdote
  const maxVotedAnecdote = votes.findIndex(vote => vote === Math.max(...votes));

  // most voted anecdote - get index of max(votes), subset anecdotes using max(votes) index
  return (
    <>
      <Title text="Anecdote of the Day" />
      <Display text={anecdotes[selected] } />
      <Display text={`Has ${votes[selected]} Votes`} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleNextAnecdote} text="Next Anecdote" />
      <Title text="Most Voted Anecdote!" />
      <Display text={anecdotes[maxVotedAnecdote]} />
      <Display text={`Has ${Math.max(...votes)} Votes`} />
    </>
  )
}
