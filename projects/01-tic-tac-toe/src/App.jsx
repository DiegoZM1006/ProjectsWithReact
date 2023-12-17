import { useState } from 'react'
import confetti from 'canvas-confetti'
import './App.css'

import { Square } from './components/Square'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorages = window.localStorage.getItem('board')
    return boardFromStorages 
      ? JSON.parse(boardFromStorages) 
      : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorages = window.localStorage.getItem('turn')
    return (turnFromStorages ?? TURNS.X)
  })
  const [winner, setWinner] = useState(null) // Null no hay ganador, false un empate

  const updateBoard = (index) => {

    // No actualizamos esta posicion, si ya tiene algo
    if(board[index] || winner) return

    // Actualizamos esta posicion, si no tiene nada
    const newBoard = [... board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)

    if(newWinner) {
      confetti()
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='text-white w-fit text-center'>
      <h1 className='text-[#eee] font-mono text-3xl'>Tic tac toe</h1>
      <button onClick={resetGame} className='px-[12px] py-[8px] m-[35px] bg-transparent border-[2px] border-[solid] border-[#eee] text-[#eee] w-[250px] rounded-[5px] [transition:0.2s] font-bold cursor-pointer hover:bg-[#eee] hover:text-[#222]'>Empezar de nuevo</button>
      <section className='grid grid-cols-3 gap-3'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                style={'w-[100px] h-[100px] border-[2px] border-[solid] border-[#eee] rounded-[5px] grid place-items-center cursor-pointer text-[48px]'}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='flex justify-center my-7 mx-0 rounded-[10px]'>
        <Square 
        isSelected={turn === TURNS.X}
        style={'w-[70px] h-[70px] pointer-events-none border-transparent text-[48px] rounded'}
        >
          {TURNS.X}
        </Square>

        <Square 
        isSelected={turn === TURNS.O}
        style={'w-[70px] h-[70px] pointer-events-none border-transparent text-[48px] rounded'}
        >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App