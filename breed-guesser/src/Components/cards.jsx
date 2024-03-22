import { useState } from "react"
import CardComponent from "./card";
import style from "../Games/style.module.css"



const Cards = ({newData}) => {
   
   const doubledDogPics = [...newData, ...newData]

   const [selectedCards, setSelectedCards] = useState([])
   const [prevSelected, setPrevSelected] = useState(-1)

    



console.log(doubledDogPics)

        function check(current) {
            if(newData[current].id == newData[prevSelected].id){
                newData[current].stat = "correct"
                newData[prevSelected].stat = "correct"
                setPrevSelected(-1)
            } 

        }




    function handleClick(id){
       if(prevSelected === -1){
        newData[id].stat = 'active'
        setPrevSelected(id)
       } else {
        check(id)
       }
    }
   


    return (
        <div className={style.container}>
        {doubledDogPics.map((newData, index) =>(
           
        <CardComponent key={index} newData={newData} id={index} handleClick={handleClick}/>
        
           
        ))}
    </div>
)
};
export default Cards