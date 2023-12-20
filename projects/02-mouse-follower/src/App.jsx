import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState(
    {
      x: 0,
      y: 0
    }
  )
  const textBtn = enabled ? 'Desactivar' : 'Activar';

  useEffect(() => {
    console.log('effect:', {enabled})

    const handleMove = (event) => {
      const {  clientX, clientY } = event
      console.log('handleMove:', {clientX, clientY})
      setPosition({
        x: clientX,
        y: clientY
      })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  function updateBtn() {
    setEnabled(!enabled)
  }

  return (
    <main>
      <div className='absolute bg-[#09f] rounded-full opacity-80 pointer-events-none -left-5 -top-5 w-10 h-10' style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>
      </div>
      <button onClick={updateBtn} className='rounded-lg border-[1px] border-[solid] py-2 px-5 text-[1em] font-medium [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff]'>{textBtn} seguir puntero</button>
    </main>
  )
}

export default App
