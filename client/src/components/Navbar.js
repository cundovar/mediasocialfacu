import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./log/Logout";


const Navbar=()=>{
    const uid=useContext(UidContext)
    const UserData= useSelector((state)=>state.userReducer);
    return(
        <nav>
        <div className="nav-container">
            <div className="logo">
                <NavLink to ="/">
                    <div className="logo">
                        <img src="./img/orange-circle.png"/>
                        <h3>mediaSocial</h3>

                    </div>
                </NavLink>
            </div>
            {/* si uid existe */}
             {uid ? (
                <ul>
                    <li></li>
                    <li className="welcome">
                        <NavLink to="/profil">
                            <h5>Bienvenue {UserData.pseudo} </h5>
                        </NavLink>
                    </li>
                    <Logout />
                </ul>
             ) :(

                <ul>
                    <li></li>
                    <li>
                        <NavLink to="/profil">
                           <p>déconnecté</p>
                        </NavLink>
                    </li>
                </ul>

             )  }
        </div>
        </nav>
    )
};

export default Navbar