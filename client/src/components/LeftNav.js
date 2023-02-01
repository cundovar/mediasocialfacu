import React from "react";
import {NavLink} from "react-router-dom"


const LeftNav=()=>{
    return(
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/'>
                        <img src="./img/icons/home.svg"/>
                        {/* <p>home</p> */}
                    </NavLink>
                    <br/>
                    <NavLink to='/trending'>
                        <img src="./img/icons/rocket.svg"/>
                        {/* <p>trending</p> */}
                    </NavLink>
                    <br/>
                    <NavLink to='/profil' >
                        <img src="./img/icons/user.svg"/>
                        {/* <p>profil</p> */}
                    </NavLink>
                    <br/>
                </div>

            </div>
        
        </div>
    );
};

export default LeftNav