import { useState } from "react";

export default function Player(props) {
  const [isEditing, setisEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.name);
  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  function toggleButton() {
    setisEditing((isEditing) => !isEditing);
  }

  let playerNameDiv = <span className="payer-name">{playerName}</span>;

  isEditing &&
    (playerNameDiv = (
      <>
        <input defaultValue={playerName} onChange={handleNameChange}></input>
        <button onClick={toggleButton}>save</button>
      </>
    ));

  return (
    <li>
      <span className="player">
        {playerNameDiv}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      {!isEditing && <button onClick={toggleButton}>Edit</button>}
    </li>
  );
}
// in react when updating the state it should not use likr setEdit(!edit)
// it should ne like setEdit ((edit) => !edit)
// react behind the scenes is scheduling state u[dates
// state updates are not performed instantly but at some point in the future (when React has time for it)
//due to this  we might not get proper result in following case
// if edit=true
// setEdit(!edit) //false
// setEdit(!edit) //true
// if we use setEdit(edit=>!edit)
// it will schedule the 2nd operatoin after the completion of the first

// -------------------------
//defaultValue vs value

// -----------------
// onchange will trigger on every key strole
// function handleNameChange(event){
//   console.log(event)
//   setPlayerName(event.target.value);
// }

// TWO WAY BINDING
//  




