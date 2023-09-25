import Card from './Card'
import {useState} from 'react'
import './Cards.css'
const Cards = (props) => 
{   const cardlis = Array(props.len).fill().map((_,index)=>index);
    const [flipIndex,setFlipIndex] = useState(-1);
    return (
        <div className="layout">
           {
             cardlis.map((_,index) => <Card key={_}  flipped={flipIndex} num={index}  setflip={setFlipIndex} />)
           }
        </div>
    )
}

export default Cards;