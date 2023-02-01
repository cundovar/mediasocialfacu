import axios from "axios";
import React, { useState } from "react";
import SignInForm from "./SignInForm";



const SignUpForm =()=>{

    const [formSubmit,setFormSubmit]=useState(false)

    const [pseudo,setPseudo]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [controlPassword,setControlPassword]=useState('')

    const handleRegister= async (e) =>{
        e.preventDefault();
        const terms=document.getElementById('terms');
        const pseudoError=document.querySelector('.pseudo.error')
        const emailError=document.querySelector('.email.error')
        const passwordError=document.querySelector('.password.error')
        const passwordConfirmError=document.querySelector('.password-confirm.error')
        const termsError=document.querySelector('.terms.error')

        passwordConfirmError.innerHTML="";
        termsError.innerHTML="";

        if(password !== controlPassword
             || 
             ! terms.checked
             )
            if (password !== controlPassword)
            {
                passwordConfirmError.innerHTML="les mots de passes ne corresponde pas";

            if ( !terms.checked)
                termsError.innerHTML="veuillez valider les conditions générales";
        }else{
            await axios({
                method:"post",
                url:" http://localhost:5001/api/user/register",
                // withCredentials:true,
                data:{
                    pseudo,
                    email,
                    password,
                },


            })
            .then((res)=>{
                if(res.data.errors){
                    console.log(res);
                    pseudoError.innerHTML=res.data.errors.pseudo;
                    emailError.innerHTML=res.data.errors.email;
                    passwordError.innerHTML=res.data.errors.password;
                    
                }else{
                    // si pas d'erreur alors formSubmit sur true
                    setFormSubmit(true);
                }
            })
            .catch((err)=>console.log(err));
        }


    }
 


    return(
<>
{/* si fromSubmit est sur true */}
{formSubmit ? (
    <>
    <SignInForm/>
    <span></span>
    <h4 className="success">Enregistrement réussi, veuillez vous connecter</h4>
    </>
    // sinon ( formsbmit a false)
) :(

    < form action="" onSubmit={handleRegister} id="sign-up-form" >
      
          <label htmlFor="pseudo">Pseudo</label>
        <br/>
        <input type="text"
         name="pseudo"
         id="pseudo"
         onChange={(e)=>setPseudo(e.target.value) }
           value={pseudo} />
               <div className="pseudo error"></div>

               <br/>

               <label htmlFor="email">email</label>
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
               <label htmlFor="password"> confirmé mot de passe</label>
        <br/>
        <input type="password"
         name="password"
          id="password-conf"
          onChange={(e)=>setControlPassword(e.target.value) }
          value={controlPassword} />
               <div className="password-confirm error"></div>

               <br/>

    
        <br/>
        <input type="checkbox"id="terms"/>
        <label 
           htmlFor="terms">j'accepte les 
             <a href="/"
             target="_blank" 
             rel="noopener noreferrer" >conditions générales
             </a>
        </label>
        <div className="terms error"></div>

               <br/>




        <input type="submit" value="se connecter"/>
      </form>
               )}
      </>
    )

/* 
<label htmlFor="email">email</label>
<br/>

            <imput type="text"
            name="email"
             id="email"
              onChange={(e)=>setEmail(e.target.value)
              } value={email} />
           <div className="email error"></div>
           
           <br/>

           <label htmlFor="password">mot de passe </label>
            <br/>

            <imput type="password"
             name="password "
             id="password"
             onChange={(e)=>setPassword(e.target.value)
           } value={password} />
           <div className="password error"></div>
           
           <br/>
           
           <label htmlFor="password-conf">confirmer mot de passe </label>
 <br/>

 <imput type="password"
 name="password "
  id="password-conf"
   onChange={(e)=>setControlPassword(e.target.value)
} value={controlPassword}/>
<div className="password error"></div>


<br/>

<imput type="checkbox" id="terms"/>
<label 
htmlFor="terms">j'accepte les 
<a href="/"
 target="blank" 
 rel="noopener noreferrer" >conditions générales
 </a>
</label>
*/




        /* <input type="submit" value="valider inscription"/> */
    
    }
        

    

export default SignUpForm