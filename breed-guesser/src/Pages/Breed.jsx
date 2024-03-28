import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import handleFetch from "../utils/handleFetch";

const Breed = () => {
    const { breed } = useParams()
    // const breed = breed.find((breed) => breed.name = breedName)

    const [pics, setPics] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        const getPics = async () => {
            const [data, error] = await handleFetch(`https://dog.ceo/api/breed/${breed}/images`)
            if (data) setPics(Object.values(data.message));
            if (error) setError(error);
        }
        getPics()
    }, [])


    console.log(pics)
    return (
        <>
            <h2>Look at these cool pictures of the great {breed}!</h2>
            <ul>
                {
                    pics.map((pic, idx) => {
                        return (
                            <li key={idx}>
                                <img src={pic} alt="picture of dog" />
                            </li>
                        )
                    })
                }
            </ul>


        </>
    )
};

export default Breed;