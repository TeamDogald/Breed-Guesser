import { useState, useEffect } from "react"
import handleFetch from '../Utils/handleFetch.js'
import './Home.css'

const randDogs = 'https://dog.ceo/api/breeds/image/random'

const Home = () => {
   
   const [img, setImg] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdowney.co.nz%2Fwp-content%2Fuploads%2F2015%2F09%2Fawards-grey-box-large.jpg&f=1&nofb=1&ipt=4333a941335fef3af0d1b775130fb12772b3701f71fa86ecebb52cd0289fd21a&ipo=images')
   const [err, setErr] = useState('')
   useEffect (() => {
      const getImg = async () => {
         const [data, err] = await handleFetch(randDogs)
         if (data) setImg(data.message);
         if (err) setErr(err);
      }
      getImg()
   }, [])
   const stuff = img.split('/')
   let name = stuff[4]

   name = name.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
      
   return (
      <div id='home'>
         <div id='home-content'>
            <h1>Hello! Welcome to Breed Guesser!</h1>
            <div id="img-div">
               <img src={img} alt="doggy" id='home-img'/>
               <p>{name}</p>
            </div>

         </div>
      </div>
   ) 


}



export default  Home