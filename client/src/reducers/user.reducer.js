import {GET_USER, UPDATE_BIO, UPLOAD_PICTURE,FOLLOW_USER,UNFOLLOW_USER} from '../actions/user.actions'
const initialState={};

export default function userReducer(state=initialState,action){
    switch(action.type){
        case GET_USER:
            return action.payload;
        case UPLOAD_PICTURE:
        return {
            ... state,
            picture:action.payload,
        }
        case UPDATE_BIO:
        return{
            ... state,
            bio:action.payload
        }
        case FOLLOW_USER:
            return{
                // dans tout le state
                ...state,
                following: [action.payload.idToFollow, ...state.following]
            }
            case UNFOLLOW_USER:
                return{
                    // dans tout le state
                    ...state,
                    // ON UTLISE JAVASCRIPT filter() qui filtre id, tous les id ! action.payload.idToFollow
                    following: state.following.filter((id)=> id !== action.payload.idToUnfollow)
                }


        default:
            return state;

    }
}