import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import handleFetch from "../utils/handleFetch";

const defaultDog = { 'message': 'https://images.dog.ceo/breeds/hound-walker/n02089867_1764.jpg', 'status': 'success' }

const Breeds = () => {

    const [breeds, setBreeds] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        const getBreeds = async () => {
            const [data, error] = await handleFetch('https://dog.ceo/api/breeds/list/all')
            if (data) setBreeds(Object.keys(data.message));
            if (error) setError(error);
        }
        getBreeds()
    }, [])

    console.log(breeds)

    return (
        <>
            <h1>Breeds</h1>
            <ul>
                {
                    breeds.map((breed) => {
                        return (
                            <li>
                                <Link to={`/breeds/${breed}`}>{breed}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Breeds