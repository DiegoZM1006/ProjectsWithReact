import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

import './index.css'

export function App() {

    const { fact, refreshRandomFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshRandomFact()
    }

    return (
        <main className='w-[800px] mx-auto h-[100dvh] justify-center flex place-items-center flex-col gap-5 font-mono'>
            <h1 className='text-3xl font-bold'>App de gatitos</h1>
            {imageUrl &&
                <img className='h-auto w-[320px]' src={imageUrl} alt={`Image extracted usin the first three words for ${fact}`} />
            }
            {fact &&
                <p>{fact}</p>
            }
            <button onClick={handleClick} className='rounded-lg border-[1px] border-[solid] py-2 px-5 text-[1em] font-medium [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff] text-white'>Otro hecho</button>
        </main>
    )
}