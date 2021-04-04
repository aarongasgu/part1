import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({title}) => <h1>{title}</h1>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const comentario = (comment) => () => {
    if(comment === "good"){
      setGood(good + 1)
    } else if(comment === "neutral"){
      setNeutral(neutral + 1)
    } else if(comment === "bad"){
      setBad(bad + 1)
    }
  }

  let total = (good + neutral + bad)
  console.log(total)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={comentario("good")}>good</button>
      <button onClick={comentario("neutral")}>neutral</button>
      <button onClick={comentario("bad")}>bad</button>
      <Statistics title="Statistics"/>
      good: {good} <br/>
      neutral: {neutral} <br/> 
      bad: {bad} <br/> 
      total: {total} <br/> 
      promedio: {total / 3} <br/> 
      positivos: {good * 100 / total + "%"}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)