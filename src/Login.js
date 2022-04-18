import React, { useState, useRef } from "react";
import fire from "./ConfiguracionFirebase";
import "firebase/auth";
import Home from "./Home";

const Login =(props)=>{
    const[errorEmail,setErrorEmail]=useState("");
    const[errorPassword,setErrorPassword]=useState("");
    const[registro,setRegistro]= useState(false);

    const crearUsuario = (correo,password) =>{
        fire.auth().createUserWithEmailAndPassword(correo,password).
        then((usuarioFirebase) =>{
            console.log("Usuario Creado ", usuarioFirebase);
            props.setUsuario(usuarioFirebase);
        }).catch((err)=>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setErrorEmail(err.message);
                    break;
                case "auth/weak-password":
                    setErrorPassword(err.message);
                    break;
            }
        });
    };
    const iniciarSesion=(correo,password)=>{
        fire.auth().signInWithEmailAndPassword(correo,password)
            .then((usuarioFirebase)=>{
                console.log("sesion iniciada con: ", usuarioFirebase);
                props.setUsuario(usuarioFirebase);
            }).catch((err)=>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setErrorEmail(err.message);
                        break;
                    case "auth/wrong-password":
                        setErrorPassword(err.message);
                        break;
                }
            });
    };

    const submitHandler=(e)=>{
        e.preventDefault();
        const correo =e.target.emailField.value;
        const password=e.target.passwordField.value;
        console.log(correo,password);
        if(registro){
            crearUsuario(correo,password);
        } else{
            iniciarSesion(correo,password);
        }
    };

    return(
        <section id="login">
            <div id="logincontainer">
                <h1>{registro ? "Registrate" : "Inicia sesion"}</h1>
                <form onSubmit={submitHandler}>
                    <label id="label">Email</label>
                    <input type="text" id="emailField"/>
                    <p id="error">{errorEmail}</p>
                    <label id="label">Password</label>
                    <input type="password" id="passwordField"/>
                    <p id="error">{errorPassword}</p>
                    <button type="submit">{registro ? "Registrate" : "Inicia sesion"}</button>

                </form>
                
                <div id="btnContainer">
                <button id="button2" onClick={()=> setRegistro(!registro)}>{registro ? "Tienes cuenta? Inicia sesion" : "No tienes cuenta? Registrate"}</button>
                </div>
                
            </div>
            
        </section>
    )
}

export default Login;