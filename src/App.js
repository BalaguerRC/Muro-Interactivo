///import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import './App.css';
import fire from "./ConfiguracionFirebase";
import Login from "./Login";
import Home from "./Home";


function App() {

  const [usuario,setUsuario] = useState(null);
  useEffect(()=>{
    fire.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log("ya tienes sesion iniciada con:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  },[]);
  
  return (
    <div>
     <>
     {usuario ? <Home/> : <Login setUsuario={setUsuario}/>}
     </>
    </div>
  );
}

export default App;