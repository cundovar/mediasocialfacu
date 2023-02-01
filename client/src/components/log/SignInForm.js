import React, { useState } from "react";
import axios from 'axios'


const SignInForm=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleLogin =(e)=>{
        // preventdefault fait eviter quela page se recharge quand formulaire soumis
        e.preventDefault();
        const emailError=document.querySelector('.email.error')
        const passwordError=document.querySelector('.password.error')
        //pour acceder au backend, ici acceder email et passwoerd
        axios({
            method: "post",
            url:'http://localhost:5001/api/user/login',
            withCredentials:true,
            data:{
                email,
                password,
            }
        } )
        .then((res)=>{
            console.log(res);

            if(res.data.errors){
                //on injecte dans html
                emailError.innerHTML=res.data.errors.email;
                passwordError.innerHTML=res.data.errors.password;
            }else{
                window.location='/';
            }

        } )
        .catch((err)=>{
            console.log(err)
        })

    }

    return(

      < form action="" onSubmit={handleLogin} id="sign-up-form" >
        <label htmlFor="email">Email</label>
        <br/>
        <input type="text"
         name="email"
          id="email"
          onChange={(e)=>setEmail(e.target.value) }
           value={email} />
            <div className="email error"></div>
           <br/>
           <label htmlFor="password">mot de passe</label>
        <br/>
        <input type="password"
         name="password"
          id="password"
          onChange={(e)=>setPassword(e.target.value) }
           value={password} />
               <div className="password error"></div>

               <br/>




        <input type="submit" value="se connecter"/>
      </form>
      
    );
};

export default SignInForm