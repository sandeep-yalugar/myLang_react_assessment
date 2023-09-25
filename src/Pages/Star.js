import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Star.css'


const Star  = ({login}) => 
{   const starLis = Array(5).fill().map((_,index)=>index)
    const [starInd,setStarInd] = useState(-1)
    const handleStar = (index) =>
    {
        setStarInd(index);
    }
    const windowSize = window.innerWidth; 

    return(
        login?
        <div className='layout2' >
            <p>Ratiing:</p>
        <div className='starLayout'>
            {
                starLis.map(
                    (item,index) =>
                    <div >
                        <FaStar size={Math.floor(0.05*windowSize)} color={`${index<=starInd?'yellow':'black'}`} onClick={() => handleStar(index)} ></FaStar>
                    </div>

                )
            }

        </div>
        <div className='reset' onClick={()=>setStarInd(-1)}>Reset</div>
        </div> : <p>Login to use this functionality</p>
        
    )
}


export default Star;