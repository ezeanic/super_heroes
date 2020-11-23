import React, {useState} from 'react';
import "../App.css";

function SearchBar({ getCharacter }) {
   const [formInput, setFormInput] = useState('');


  return (
    <div style={{paddingLeft: "100px"}} >

       <div class="webflow-style-input">
        <input class="" onChange={(e)=>setFormInput(e.target.value)} placeholder="What's your email?"></input>
        <button onClick={() => getCharacter(formInput)}><i class="icon ion-android-arrow-forward">&rarr;</i></button>
  </div>
      
    </div>
  );
}

export default SearchBar;
