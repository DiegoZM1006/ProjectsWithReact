import { Square } from "./Square"

export function WinnerModal ({winner, resetGame}) {
    if (winner === null) return
    const winnerText = winner === false 
    ? 'Empate'
    : 'Gano '

    return (
        <section className='absolute w-full h-full top-0 left-0 grid place-items-center bg-[rgba(0,_0,_0,_0.95)]'>
                <div className="bg-[#111] h-[#300px] w-[320px] border-[2px] border-[solid] border-[#eee] rounded-xl flex flex-col justify-center items-center gap-5 p-6">
                  <h2 className='text-2xl'>
                    {winnerText}
                  </h2>
    
                  <header className="my-0 mx-auto w-fit border-[2px] border-[solid] border-[#eee] rounded-xl flex gap-4">
                    {
                      winner && 
                      <Square style={'w-[80px] h-[80px] border-[2px] border-[solid] border-[#eee] rounded-[5px] grid place-items-center cursor-pointer text-[48px]'}>
                        {winner}
                      </Square>
                      }
                  </header>
    
                  <footer>
                    <button onClick={resetGame} className='px-[12px] py-[8px] m-[25px] bg-transparent border-[2px] border-[solid] border-[#eee] text-[#eee] w-[100px] rounded-[5px] [transition:0.2s] font-bold cursor-pointer hover:bg-[#eee] hover:text-[#222]'>Empezar de nuevo</button>
                  </footer>
                </div>
        </section>
    )
}