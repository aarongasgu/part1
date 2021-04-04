import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0])
  
  function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
  }

  const handlerClick = () => setSelected(aleatorio(0, 5))

  const votar = () => {

    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

  }

  const maxVoto = Math.max(...points)
  console.log(masVotado)
  var masVotado = points.indexOf(maxVoto)

  return (
    <div>
      {props.anecdotes[selected]} <br />
      <button onClick={handlerClick}>siguiente anecdota</button>
      <button onClick={votar}>Like</button>
      <span>{points[selected]}</span>
      <h1>Mas votado con {maxVoto}:</h1>
      <p>{props.anecdotes[masVotado]}</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)