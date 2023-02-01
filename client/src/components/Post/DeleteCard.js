import React from "react";
import { useDispatch } from "react-redux";
import { deletepost } from "../../actions/post.actions";

const DeleteCard=(props)=>{
    const dispatch= useDispatch()
    const deleteQuote=()=>dispatch(deletepost(props.id)) 

    
    return(
        <div onClick={()=>{
            if(window.confirm('voulez vous sup cette article ?'))
            //si clicl alors on lance la fonction:
            {deleteQuote()}
        }} >
           <img src="./img/icons/trash.svg" alt="trash"/>
        </div>
    )
}
export default DeleteCard