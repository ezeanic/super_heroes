import React, {useState, useEffect} from 'react';
import SearchBar from './componenets/SearchBar';
import CharacterCard from './componenets/CharacterCard'
//import { Container } from 'react-bootstrap';

function App() {

  const [characterInfo, setCharacterInfo] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false)
  var errorShow = 0;

  const getCharacter = async (chname) => {
    setLoading(true);
    try {
      const response = await fetch(`https://proxy-server.herokuapp.com/https://superheroapi.com/api/1329227717427012/search/${chname}`);
      
      const json = await response.json();  
        if(!response.ok || json.response=='error'){
          throw Error('Invalid name');
        }
      const filteredJson = json.results.filter(
        (item) => chname.toLowerCase() === item.name.toLowerCase()
      );
      setCharacterInfo(filteredJson);
      chname="";
    } catch (error) {
      setError(error.message);
      setCharacterInfo([]);
    }
    setLoading(false);
}

  return (
    <div> 
      <h1 id="header">Heroes and Vilians</h1>
      <SearchBar getCharacter={getCharacter} />
      {loading==true? <div class="loader"></div>: ""}
      {characterInfo? <CharacterCard characterInfo={characterInfo}/> : null}}
    </div>
  );
}

export default App;
