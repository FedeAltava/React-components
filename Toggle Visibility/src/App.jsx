import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const[visible,setVisible]= useState(true)
  
  const handleClick = () =>{
   setVisible(!visible)
  }

  return (
    <>
     <p style={{visibility:visible?'visible':'hidden'}}>Hello World!</p>
     <button onClick={handleClick}> {visible?'Ocultar':'Mostrar'}</button> 
    </>
  )
}

export default App
