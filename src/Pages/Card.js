import React, { useState } from 'react';
import './Card.css';

const Card = ({flipped,num,setflip,}) => {

 const handleClick = () => {
    console.log('clicked')
    if(flipped===num){
        setflip(-1)
    }
    else{
    setflip(num);}
    

 }

  return (
    <div className={`container ${flipped===num?'flipped':''}`}>
      <div className="card"  onClick={()=>handleClick()}>
        <div className="front"></div>
        <div className="back">{num}</div>
      </div>
    </div>
  );
};

export default Card;
