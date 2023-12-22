import { useState, useEffect } from 'react'

const CAT_ENPOINT_IMAGE_URL = 'https://api.thecatapi.com/v1/images/search'

export function useCatImage ({ fact }) {

    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        if (!fact) return

        fetch(CAT_ENPOINT_IMAGE_URL)
            .then(res => res.json())
            .then(response => {
                const url = response[0].url
                setImageUrl(url)
            })
    }, [fact])

    return { imageUrl }
}