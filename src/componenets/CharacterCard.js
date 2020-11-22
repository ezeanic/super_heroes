function CharacterCard({characterInfo}) {

  var items=[];
  console.log(characterInfo);
  for (const [index, value] of characterInfo.entries()) {
    items.push(<div style={{backgroundColor: "grey" , padding:"10px", marginLeft: "50px"}} >
    <p style={{fontSize: "20px", backgroundColor:"white", padding:"10px"}}><b>{characterInfo[index].name}</b></p>
     <p>{characterInfo[index].biography["full-name"]}</p>
     <img src={characterInfo[index].image.url}/>
   </div>)
  }
    return (
      <div><br/><br/>
        {items}
      </div>
    );
  }
  
  export default CharacterCard;
  