import React, {useState} from 'react';
import "../App.css";

function SearchBar({ getCharacter }) {
   const [formInput, setFormInput] = useState('');

// handleChange(e) {
//     setFormInput(e.target.value);
// }

  return (
    <div style={{paddingLeft: "100px"}} >

       <div class="webflow-style-input">
        <input id="changeInput"  onChange={(e)=>{ setFormInput(e.target.value);}} placeholder="Search Character"></input>
        <p>{formInput}</p>
        <button val="" onClick={(e) => {getCharacter(formInput); setFormInput(""); document.getElementById("changeInput").value=""}}><i class="icon ion-android-arrow-forward">&rarr;</i></button>
  </div>
      
    </div>
  );
}

export default SearchBar;
