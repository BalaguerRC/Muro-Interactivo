import React, {useState,useEffect} from "react";
import EnviarPost from "./EnviarPost";
import {basededato} from "./ConfiguracionFirebase";
import Post from "./Post";

const Muro=()=>{

    const[post1,setPost]=useState([]);

    const AddPost=(post)=>{
        const tempPost= post1.slice();
        tempPost.push(post);
        setPost(tempPost);
    }
    useEffect(()=>{
        const listado=[]
        basededato.collection('muro').get().then(resultado=>{
            resultado.forEach(post=>{
                listado.push(post.data());
            })
            setPost(listado);
        }).catch(error=>console.error(error));
    }, []);

    return(
        <div id="div3">
            <div id="envio">
                <EnviarPost AddPost={AddPost}/>
            </div>
            <div id="chat">
                {
                    post1 && post1.slice().reverse().map((post,i)=>{
                        const {user,text}=post;
                        return(<Post key={i} user={user} text={text}/>)
                    })
                }
            </div>
        </div>
    );
}

export default Muro;