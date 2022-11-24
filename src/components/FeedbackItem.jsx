import React from 'react';
import { useState } from 'react';

function Feedbackitem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('Example of feedback item');



  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  )
}

export default Feedbackitem