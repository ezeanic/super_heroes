function CharacterCard({characterInfo}) {

  var items=[];
  console.log(characterInfo);
  for (const [index, value] of characterInfo.entries()) {
    items.push(<div style={{paddingLeft: "100px"}} >
    <p><b>{characterInfo[index].name}</b></p>
     <p>{characterInfo[index].biography["full-name"]}</p>
     <img src={characterInfo[index].image.url}/>
   </div>)
  }
    return (
      <div>
        {items}
      </div>
    );
  }
  
  export default CharacterCard;
  