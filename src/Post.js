import React from "react";

function Post({user, text}){

    return(
        <div id="div2">
            <div id="user">
                {user}
            </div>
            <div>
                {text}
            </div>
        </div>
    );
}
export default Post;