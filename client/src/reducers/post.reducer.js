import { DELETE_COMMENT,
  DELETE_POST,
  EDIT_COMMENT,
  GET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  UPDATE_POST, } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    

      case UPDATE_POST:
        return state.map((post)=>{
          if(postReducer._id===action.payload.postId){
            return{
              ...post,
              message:action.payload.message
            }
          }else return post
        } )

      case DELETE_POST:
        return state.filter((post)=>post._id !== action.payload.postId)
      default:
        return state
    }

} 