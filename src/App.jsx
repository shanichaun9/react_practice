import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
    console.log('Value updated', {counter});
    counter = counter + 1
    setCounter(counter)
  }

  const removeCounter = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Test</h1>
      <h2>Counter Value : 4</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button disabled={counter < 1} onClick={removeCounter}>Remove Value {counter} </button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
