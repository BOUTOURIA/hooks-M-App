import React from 'react'

import { useState } from "react";

export default function Add({addHandler}) {
  const [show, setShow] = useState(false);
 

  const toggle = () => {
    setShow(!show);
  };

  const [title, settitle] = useState('')
  const [poster, setposter] = useState('')
  const [description, setdescription] = useState('')
  


const addMovie=()=>{
  title&&
addHandler({ id:Math.random(), title:title, img:poster, Description:description})
settitle('')
setdescription('')
setposter('')
toggle()
}

  return (
    <div>
      <div className="new-movie">
        
            <h3>Add a new movie</h3>
          
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            placeholder="movie title..."
          />
        </div>
        <div className="input-group">
          
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="description"
          />
</div>
<button onClick={addMovie}> Submit </button>
</div>  

  );
}
