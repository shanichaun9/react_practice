import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const obj = {
    name: 'CloudPeak Technologies',
    Address: 'Rajkot Branch'
  }
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-3'>Tailwind Test</h1>
      <Card obj={obj}/>
    </>
  )
}

export default App
