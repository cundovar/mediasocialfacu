// import React,{useState,useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { upadatePost } from "../../actions/post.actions";
// import FollowHandler from "../profil/FollowHandler";
// import { dateParser, isEmpty } from "../Utils";
// import DeleteCard from "./DeleteCard";


// const Card=({post})=>{
//     // mettre un loading avant le chargement des posts :
//     const [isLoading,setIsLoading]= useState(true);
//     // s'appeler toutes la base de donné des utilistaeurs
//     const usersData=useSelector((state)=>state.usersReducer)
//     //data individuelle
//     const userData=useSelector((state)=>state.usersReducer)
//     const [isUpdated,setIsUpdated]=useState(true);
//     const [textUpdate,setTextUpdate]=useState(null)
//     const dispatch=useDispatch()

//     const updateItem =async()=>{
//         if(textUpdate){
//             dispatch(upadatePost(post._id,textUpdate))
            
//         }
//         setIsUpdated(false)

//     }

//     useEffect(()=>{
//         // si  isEmpty n'est pas vide alors setIsLoading a false
//     ! isEmpty(usersData[0]) && setIsLoading(false)
//     },[usersData])
//     return(
//       <li className="card-container" key={post._id}>
//         {/* isLoading est il sur true ? */}
//         {isLoading ? (
//             // si oui
//             <i className="fas fa-spinner fa-spin"></i>
//             // sinon
//         ) : (
//             <>
//                <div className="card-left">
//                  < img src={ 
//                     ! isEmpty(usersData[0]) && usersData.map((user)=>{
//                         if (user._id === post.posterId) return user.picture;
//                        else return null
//                     }).join('')
//                   }
//                    alt="user-pic"/> 
//                </div>
//                <div className="card-right">
//                  <div className="card-header">
//                     <div className="pseudo">
//                         <h3>
//                             {
//                     ! isEmpty(usersData[0]) && usersData.map((user)=>{
//                     if (user._id === post.posterId) return user.pseudo;
//                 }).join('')
//                         }
//                         </h3>
//                         {/* {post.posterId !== userData._id && ( */}

//                         <FollowHandler idToFollow={post.posterId} type={'card'} />
//                           {/* ) }  */}
//                     </div>
//                     <span> {dateParser(post.createdAt)} </span>

//                  </div>
//                  {isUpdated === false && <p>{post.message} </p>}
//                  {/* si sur true */}
//                  {isUpdated  && (
//                     <div className="update-post">
//                         <textarea
//                         defaultValue={post.message}
//                         onChange={(e)=>setTextUpdate(e.target.value)}
//                         />
//                         <div className="button-container">
//                             <button className="btn" onClick={updateItem}>
//                                 valider modification
//                             </button>
//                         </div>
//                     </div>
//                  ) }
                 
//                  {/* si post.picture existe tu affiche... */}
//                  {post.picture && <img src= {post.picture} alt="picPerso" className="card-pic"/>}
//                </div>
//                {/* si video existe alors... */}
//                { post.video && (

//                          <iframe
//                          width="500"
//                          height="300"
//                          src={post.video}
//                          frameBorder="0"
//                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                          allowFullScreen
//                          title={post._id}
//                          ></iframe>

//                )}

//              {userData._id !== post.posterId && (
//               <div className="button-container">
//                 <div onClick={() => setIsUpdated(! isUpdated)} >
               
//                   <img src="./img/icons/edit.svg" alt="edit" />
//                 </div>
//                 <DeleteCard id={post._id} />
//               </div>
//             )}
             
//                <div className="card-footer">
//                 <div className="comment-icon">
//                     <img src="./img/icons/message1.svg" alt="commentIcon"/>
//                     <span>{post.comments.lenght}</span>
//                 </div>
//                 <h6>like bouton</h6>
//                </div>
//                </>
//         )}

       
//       </li>
      
//     )
// }

// export default Card

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../profil/FollowHandler";
// import LikeButton from "./LikeButton";
import { upadatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";
// import CardComments from "./CardComments";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(upadatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    if (user._id === post.posterId) return user.picture;
                    else return null;
                  })
                  .join("")
              }
              alt="poster-pic"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {!isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                      .join("")}
                </h3>
                {post.posterId !== userData._id && (
                  <FollowHandler idToFollow={post.posterId} type={"card"} />
                )}
              </div>
              <span>{dateParser(post.createdAt)}</span>
            </div>
            {isUpdated === false && <p>{post.message}</p>}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message}
                  onChange={(e) => setTextUpdate(e.target.value)}
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modification
                  </button>
                </div>
              </div>
            )}
            {post.picture && (
              <img src={post.picture} alt="card-pic" className="card-pic" />
            )}
            {post.video && (
              <iframe
                width="500"
                height="300"
                src={post.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={post._id}
              ></iframe>
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            )}
            <div className="card-footer">
              <div className="comment-icon">
                 <div className="comment-icon">
                    <img onClick={()=>setShowComments(!showComments)} src="./img/icons/message1.svg" alt="commentIcon"/>
                   <span>{post.comments.lenght}</span>
               </div>
        
              </div>
            
              <img src="./img/icons/share.svg" alt="share" />
            </div>
        {showComments && <CardComments props={post}/>}
          </div>
        </>
      )}
    </li>
  );
};

export default Card;