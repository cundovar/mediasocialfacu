import React from "react";
import axios from "axios";
import cookie from "js-cookie"


const Logout =()=>{
    const removeCookie=(key)=>{
        if(window !== "unefined"){
            cookie.remove(key,{expires:1 });
        }

    };
    const Logout=async ()=>{
        await axios({
            method:'get',
            url:'http://localhost:5001/api/user/logout',
            withCredentials:true
        } )
        .then(()=>removeCookie('jwt'))
        .catch((err)=>console.log(err))
       
      window.location="/"  ;

    }
    return(
        
        <div>
            <li onClick={Logout}>
                <img src="./img/icons/logout.svg"/>
            </li>

        </div>
    )


    
}

export default Logout