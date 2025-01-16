import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleclickAdd(){
    setCount(count+1)
  }

  function handleclickSub(){
    setCount(count-1)
  }
  return ( 
    <>
    <p>
      {count}
    </p>
    <button onClick={handleclickAdd}>+</button>
    <button onClick={handleclickSub}>-</button>
    </>
  );
}

export default App;
