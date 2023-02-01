import axios from "axios";

// données de tous les utulisateurs

export const GET_USERS="GET_USERS";

export const getUsers=()=>{
    return (dispatch)=>{
        return axios
          .get("http://localhost:5001/api/user/")
          .then((res)=>{
            dispatch({type:GET_USERS,payload:res.data});
          })
          .catch((err)=>console.log(err))
    }
}