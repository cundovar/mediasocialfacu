import React, { useEffect, useState } from "react";
import { getPosts } from "../actions/post.actions";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty  } from "./Utils";
import Card from "./Post/Card";


const Thread=()=>{
    const [loadPost,setLoadPost]=useState(true)
    const dispatch=useDispatch()
    const posts=useSelector((state)=>state.postReducer)

    const [count,setCount] =useState(4)
    const loadMore=()=>{
      //parti 1 est l'endroit où on est parti de l'ecran, 2 c'et toute la taille de tout le scroll quand le scoll parti 1 touche le bas on arrive dans une condtion
      if(window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight){
        setLoadPost(true)
      }
    }

    useEffect(()=>{
        if(loadPost){
          // on passe en paramettre count donc à paraméter dans  post action
             dispatch(getPosts(count));
             setLoadPost(false)
             setCount(count +2)
        }

        window.addEventListener('scroll',loadMore);
        return()=>window.removeEventListener('scroll',loadMore);
    },[loadPost,dispatch])

    return(
        <div className="thread-container">
          <ul>
            { ! isEmpty(posts[0]) &&
             posts.map((post)=>{
                return < Card post={post} key={post._id} />
             })
             }
          </ul>
        </div>
    )
}

export default Thread;