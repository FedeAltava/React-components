import { useState } from "react";

import "./App.css";

function App() {
  const[text, setText] = useState('')
  const handleText = (event) =>{
    setText(event.target.value)
  }
  return (
    <>
      <form>
        <label htmlFor="">Escribe lo que quieras: </label>
        <input type="text" onChange={handleText}/>
      </form>
      <p>{text}</p>
    </>
  );
}

export default App;
