import style from './style.module.css'
import { useEffect, useState } from 'react'
import handleFetch from '../utils/handleFetch'


const RandomEightDogsUrl = `https://dog.ceo/api/breeds/image/random/8`




const Memory = () => {
    const [dogPics, setDogPics] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const doFetch = async () => {
          
            const [data, error] = await handleFetch(RandomEightDogsUrl)
            if (error){
                setError(error.message)
            } else {
                setDogPics(data.message)
            }
   
        }
        doFetch()
    }, [])


    console.log(dogPics)

    // render the component
    return (
        <div className={ style.memoryContainer}>


        
        <div 
        
        >
        <h1 className={style.h1}>Match the Doggy Pair</h1>
        {/* <div className={style.container}> */}
        
            

        </div>
        </div>
       
        // </div>
    )
}

export default Memory