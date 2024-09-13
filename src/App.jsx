import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [color, setColor] = useState('olive')
  const [color, setColor] = useState(() => localStorage.getItem('selectedColor') || 'olive');
  useEffect(() => {
    localStorage.setItem('selectedColor', color);
  }, [color]);
  return (
    <div className='w-full h-screen duration-200'
      style={{ background: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'red' }}
            onClick={() => { setColor('red') }}
          >Red</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'green' }}
            onClick={() => { setColor('green') }}
          >Green</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'blue' }}
            onClick={() => { setColor('blue') }}
          >Blue</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'pink' }}
            onClick={() => { setColor('pink') }}
          >Pink</button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{ background: 'black' }}
            onClick={() => { setColor('black') }}
          >Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
