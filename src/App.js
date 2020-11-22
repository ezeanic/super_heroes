import React, {useState, useEffect} from 'react';
import SearchBar from './componenets/SearchBar';
import CharacterCard from './componenets/CharacterCard'
//import { Container } from 'react-bootstrap';

function App() {

  const [characterInfo, setCharacterInfo] = useState();
  const [error, setError] = useState();
  // const [loading, setLoading] = useState(false)

  const getCharacter = async (chname) => {
    try {
      const response = await fetch(`https://proxy-server.herokuapp.com/https://superheroapi.com/api/1329227717427012/search/${chname}`);
      
      const json = await response.json();  
        if(!response.ok || json.response=='error'){
          throw Error('Invalid name');
        }
      setCharacterInfo(json)
    } catch (error) {
      setError(error);
    }
}

  return (
    
    <div> 
      <h1 style={{paddingLeft: "100px"}} >Heroes and Vilians</h1>
      <SearchBar getCharacter={getCharacter} />
      {characterInfo? <CharacterCard characterInfo={characterInfo.results}/> : null}
    </div>
  );
}

export default App;
