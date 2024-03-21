import { useState, useEffect } from "react"

 RandomEightDogsUrl = `https://dog.ceo/api/breeds/image/random/8`

function FetchGameData() {
    const [dogPics, setDogPics] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        fetch(RandomEightDogsUrl)
    })
}




export default FetchGameData