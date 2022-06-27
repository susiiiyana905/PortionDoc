import './App.css';
import React, {useEffect} from "react"
import { BrowserRouter } from 'react-router-dom';
import Mid from './Components/mid';

function App(){

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]")
    }
  }, [])
  return(
  <div>
    <BrowserRouter>

   
    <Mid></Mid>
   

  
    </BrowserRouter>
  </div>
  );
}

export default App;
