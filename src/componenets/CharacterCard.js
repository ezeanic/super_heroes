function CharacterCard({characterInfo}) {

  var items=[];
  console.log(characterInfo);
  for (const [index, value] of characterInfo.entries()) {
    items.push(<div class="webflow-style-data" >
    <p ><b>{characterInfo[index].name}</b></p>
     <p>{characterInfo[index].biography["full-name"]}</p>
     <div class="infocharacter">
        <img src={characterInfo[index].image.url}/>
        <div id="superabilities">
          <p>Combat: {characterInfo[index].powerstats.combat}</p>
          <p>Durability: {characterInfo[index].powerstats.durability}</p>
          <p>Intelligence: {characterInfo[index].powerstats.intelligence}</p>
          <p>Speed: {characterInfo[index].powerstats.speed}</p>
          <p>Strength: {characterInfo[index].powerstats.strength}</p>
        </div>
      </div>
   </div>)
  }
    return (
      <div><br/><br/>
        {items}
      </div>
    );
  }
  
  export default CharacterCard;
  