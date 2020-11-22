import React, {useState} from 'react';

function SearchBar({ getCharacter }) {
   const [formInput, setFormInput] = useState('');


  return (
    <div style={{paddingLeft: "100px"}} >
       {/* <form style={{paddingLeft: "100px"}}> Search */}
       <input onChange={(e)=>setFormInput(e.target.value)} />
       <button onClick={() => getCharacter(formInput)}>Search</button>
      {/* </form>  */}
    </div>
  );
}

export default SearchBar;
