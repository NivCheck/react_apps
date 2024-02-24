import './App.css';
import { useState } from 'react';

function Starrating() {

  const [rating, setRating] = useState(0);  
  const [hoverrating, setHoverRating] = useState(0);  
  return (
    <div className="App">
        <div>Star Rating</div>
        <div className='container'>
            {[...Array(5)].map((_, index) => {
            return <span key="index" onMouseEnter={()=>setHoverRating(index+1)} onMouseOut={()=> setHoverRating(0)} className={`${rating > index ? 'star-filled' : ''} star ${hoverrating >index ? 'star-filled': ''}`} onClick={()=> setRating(index+1)}  >&#9733;</span>
            })} 
        </div>
        <div>{rating}</div>
    </div>
  );
}

export default Starrating;
