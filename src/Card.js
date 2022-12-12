// not for poker
import React,{useState} from "react";
import './Card.css';
import TinderCard from 'react-tinder-card'

function TinderCards() {
    //setpeople
    const[people,setpeople]= useState([
        {
            name:"Hammer",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
        },
        {
            name:"NotHammer",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
        },
        {
            name:"Fit",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
        },
        {
            name:"lager",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
        },
        {
            name:"Gulscukas",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzAa47pEHrBzuiTmA_AqnqwbWP3vXV9iBZ7w&usqp=CAU",
        }
    ])
    const swiped = (direction,nameToDelete)=>
    {
        console.log(" left the creen" + nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame = (name)=>{
        console.log(name + " left the creen");
    }
    return (
    <div className="tcard">
        <div className="cardcont">
        {people.map((person)=>(
    <TinderCard
        className="swipe"
        key={person.name}
        preventSwipe={["up","down"]}
        noSwipe={(dir)=> swiped(dir, person.name)}
        onCardLeftScreen={()=> outOfFrame(person.name)}
        >
         <div style={{backgraundImage: `url(${person.url})` }} className="tcard"  >
            <h3>{person.name}</h3>
         </div>
        </TinderCard>
))}
        </div>
    </div>
    );  
}
       
export default TinderCards;