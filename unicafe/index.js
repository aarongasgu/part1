import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  console.log(props)
  if(props.total === 0 && props.vofi === "vofi"){
    return <h1>NO HAY ESTADISTICAS</h1>
  }
  if(props.total === 0){
    return <tr><td></td></tr>
  }
  return <tr><td>{props.texto} {props.valor}</td></tr>

}

const Button = ({ handleClick, text }) =>
  <button onClick={handleClick}>
    {text}
  </button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const comentario = (comment) => () => {
    if (comment === "good") {
      setGood(good + 1)
    } else if (comment === "neutral") {
      setNeutral(neutral + 1)
    } else if (comment === "bad") {
      setBad(bad + 1)
    }
  }

  const total = (good + neutral + bad)
  const promedio = ((good - bad) / total)
  const positivos = (good * 100 / total + "%")

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={comentario("good")} text="good" />
      <Button handleClick={comentario("neutral")} text="neutral" />
      <Button handleClick={comentario("bad")} text="bad" />
      {/* <button onClick={comentario("good")}>good</button>
      <button onClick={comentario("neutral")}>neutral</button>
      <button onClick={comentario("bad")}>bad</button> */}
      <h1>Statistics</h1>
      <Statistics vofi="vofi" total={total} />
      <table><tbody>
        <Statistics texto="good" valor={good} total={total}/>
        <Statistics texto="neutral" valor={neutral} total={total}/>
        <Statistics texto="bad" valor={bad} total={total}/>
        <Statistics texto="total" valor={total} total={total}/>
        <Statistics texto="promedio" valor={promedio} total={total}/>
        <Statistics texto="positivos" valor={positivos} total={total}/>
      </tbody></table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)