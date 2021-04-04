import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={comentario("good")}>good</button>
      <button onClick={comentario("neutral")}>neutral</button>
      <button onClick={comentario("bad")}>bad</button>
      <h1>statics</h1>
      good: {good} <br/>
      neutral: {neutral} <br/> 
      bad: {bad}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)