import React,{useRef,useEffect,useState} from "react";
import {basededato} from "./ConfiguracionFirebase";
import fire from "./ConfiguracionFirebase";

function EnviarPost({AddPost}){
    const [userFire,setUserFire] = useState("");
    //const userRef=useRef(null);
    const textRef=useRef(null);

    const agregarpost=()=>{
        const post={
            user: userFire,
            text: textRef.current.value,
        }
        basededato.collection('muro').add(post);

        textRef.current.value="";
        AddPost(post)
    }
    useEffect(()=>{
        fire.auth().onAuthStateChanged((userfirebase) => {

            setUserFire(userfirebase.email);
        })
      },[]);
    return(
        <div>
            <h1>Envia un post</h1>
            <div id="pdeenvio">
                <p>Usuario:⠀</p>
                <p id="p1"> {userFire}</p>
            </div>
            
            <div>
                <input ref={textRef} type="text"></input>
                <p></p>
                <button onClick={agregarpost}>Enviar</button>
            </div>
        </div>

    );
}
export default EnviarPost;