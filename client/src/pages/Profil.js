import React, { useContext } from "react";
import { UidContext } from "../components/AppContext";
import Log from "../components/log"
import UpdateProfil from "../components/profil/UpdateProfil";



const Profil=()=>{
    const uid=useContext(UidContext)
    return(
     <div className="profil-page">
        {/* si uid est true update page  */}
        {uid ?(
            <UpdateProfil/>
        )
        // sinon cette page
        :(

        <div className="log-container">
           <Log signin={false} signup={true}/>
           <div className="img-container">
            <img src="./img/orange-circle.png" alt="img-log"/>
           </div>
        </div>
        ) }

     </div>

    )
       

};

export default Profil;