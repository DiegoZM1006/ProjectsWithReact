import { useState, useEffect } from 'react'
import './index.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENPOINT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function App() {

    const [restartButton, setRestartButton] = useState(false)
    const [fact, setFact] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const updateBtn = () => {
        setRestartButton(!restartButton)
    }

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }, [restartButton])

    useEffect(() => {
        if (!fact) return

        fetch(CAT_ENPOINT_IMAGE_URL)
            .then(res => res.json())
            .then(response => {
                const url = response[0].url
                setImageUrl(url)
            })
    }, [fact])

    return (
        <main className='w-[800px] mx-auto h-[100dvh] justify-center flex place-items-center flex-col gap-5 font-mono'>
            <h1 className='text-3xl font-bold'>App de gatitos</h1>
            {imageUrl &&
                <img className='h-auto w-[320px]' src={imageUrl} alt={`Image extracted usin the first three words for ${fact}`} />
            }
            {fact &&
                <p>{fact}</p>
            }
            <button onClick={updateBtn} className='rounded-lg border-[1px] border-[solid] py-2 px-5 text-[1em] font-medium [font-family:inherit] bg-[#1a1a1a] cursor-pointer [transition:border-color_0.25s] hover:border-[#646cff] text-white'>Otro hecho</button>
        </main>
    )
}