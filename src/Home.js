import React, {useState,useEffect} from "react";
import fire from "./ConfiguracionFirebase";
import "firebase/auth";
import Login from "./Login";
import Muro from "./Muro";



const Home =()=>{
    const [userF,setUserF] = useState("");

    const cerrarSesion=()=>{
        fire.auth().signOut();
    };
    useEffect(()=>{
        fire.auth().onAuthStateChanged((userfirebase) => {

            setUserF(userfirebase.email);
        })
      },[]);

    
    return(
        <div>
            <div id="muestra">
                <h2>Bienvenido {userF}</h2>

                <button id="button3" onClick={cerrarSesion}>logout</button>
            </div>
            <div>
                <Muro/>
            </div>
        </div>
    );
;}

export default Home;
