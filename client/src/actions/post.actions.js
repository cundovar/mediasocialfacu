import axios from "axios";

// posts
export const GET_POSTS="GET_POSTS";
export const UPDATE_POST="UPDATE_POST";
export const DELETE_POST="DELETE_POST";
export const ADD_POST = "ADD_POST";
export const GET_ALL_POSTS = "GET_ALL_POSTS";

//commentaire
export const ADD_COMMENT="ADD_COMMENT"
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

// errors
export const GET_POST_ERRORS = "GET_POST_ERRORS";

//parametre num (number ) voir thred.js pour getposts
export const getPosts=(num)=>{
    return (dispatch)=>{
        return axios
        // on recupère la base de donné post
        .get(`http://localhost:5001/api/post/`)
        .then((res)=>{
            // la data des psots avec slice ! au niveau 0, a partir du premier element et me garde jusqu'ai num
            const array = res.data.slice(0, num);
            dispatch({type:GET_POSTS, payload: array});
            dispatch({ type: GET_ALL_POSTS, payload: res.data });
        })
        .catch((err)=>console.log(err))
    }

}

export const addPost = (data) => {
    return (dispatch) => {
      return axios
        .post(`http://localhost:5001/api/post/`, data)
        // .then((res) => {
        //   if (res.data.errors) {
        //     dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
        //   } else {
        //     dispatch({ type: GET_POST_ERRORS, payload: "" });
        //   }
        // });
    };
  };




export const upadatePost=(postId,message)=>{
    return(dispatch)=>{
        return axios({
            method:'put',
            url:`http://localhost:5001/api/post/${postId}`,
            data: {message}

        })
        .then((res)=>{
            dispatch({type:UPDATE_POST,payload: {message,postId}});
        })
        .catch((err)=>console.log(err));
    };
}

export const deletepost=(postId)=>{
    return(dispatch)=>{
        return axios({
            method:'delete',
            url:`http://localhost:5001/api/post/${postId}`,
         

        })
        .then((res)=>{
            dispatch({type:DELETE_POST,payload: {postId}});
        })
        .catch((err)=>console.log(err));
    };

}

export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5001/api/post/comment-post/${postId}`,
        data: { commenterId, text, commenterPseudo },
      })
        .then((res) => {
          dispatch({ type: ADD_COMMENT, payload: { postId } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const editComment = (postId, commentId, text) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url:`http://localhost:5001/api/post/edit-comment-post/${postId}`,
        data: { commentId, text },
      })
        .then((res) => {
          dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const deleteComment = (postId, commentId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `http://localhost:5001/api/post/delete-comment-post/${postId}`,
        data: { commentId },
      })
        .then((res) => {
          dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
        })
        .catch((err) => console.log(err));
    };
  };

