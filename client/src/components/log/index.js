import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";



const Log=(props)=>{
    // voir profil.js les proprs reglé a false ou true 
    const [signUpModal,setSignUpModal]=useState(props.signup);
    const [signInModal,setSignInModal]=useState(props.signin);
    

// on se recupère evenement de ce qui a étét cliqué (e)
    const handleModals=(e)=>{
        // si e cible est register
        if(e.target.id === "register"){
            setSignInModal(false);
            setSignUpModal(true);
        }else if (e.target.id==='login') {
            setSignInModal(true);
            setSignUpModal(false);
        }
    }


    return(
<div className="connection-form">
    <div className="form-container">
        <ul>
            {/* au click tu me lance la fonction handleModals */}
            <li onClick={handleModals} id='register' 
            // si sugnUpModal est sur true alors tu injecte la class active_btn sinon null
            className={signUpModal ? "active-btn":null}
            >
                s'inscrire
                </li>
            <li onClick={handleModals} id='login'className={signInModal ? "active-btn":null} >se connecter</li>
        </ul>
        {/* si tu signeUpModal est sur true alors tu m'achiche SignUpForm */}
        {signUpModal && <SignUpForm/>}
        {/* si tu signeInModal est sur true alors tu m'achiche SignInForm */}
        {signInModal && <SignInForm/>}


    </div>


</div>
    );
}
export default Log