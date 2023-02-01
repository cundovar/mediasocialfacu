

// import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { Routes,Route} from "react-router-dom"
import { UidContext } from "./components/AppContext";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Trending from "./pages/Trending";
import './styles/index.scss'
// import { UidContext } from "./components/AppContext";
import axios from "axios";
import Navbar from "./components/Navbar";
import { useDispatch } from "react-redux";
import {getUser} from './actions/user.actions'
// import { JsonWebTokenError } from "jsonwebtoken";

const App=()=>{

    const [uid,setUid]=useState(null);
    const dispatch= useDispatch();

    useEffect(()=>{
        const fetchToken=async()=>{
        await axios({
            method:"get",
            url:`${process.env.REACT_APP_API_URL}jwtid  `,
            withCredentials:true,
            // data:{token},
        } )
       .then((res)=>{
        // console.log(res);
        setUid(res.data)
       })
    }
    fetchToken()

    if(uid) dispatch(getUser(uid))


    } ,[uid,dispatch] );

    return(
       <UidContext.Provider value={uid} >
          <Navbar/>
        <Routes>
            
           
            <Route path="/" element= {<Home/> } />
            <Route path="/profil" element= {<Profil/> } />
            <Route path="/trending" element= {<Trending/> } />
       
         

          
        </Routes> 
       </UidContext.Provider >
   
    )
};

export default App;