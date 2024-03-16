import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        ADD_USER:(state,action)=>{
            // console.log("add user",action.payload)
          postdata(action.payload)
        },
        REMOVE_USER(state,action){}
    }
})
console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER}=userSlice.actions
export default userSlice.reducer


let postdata=async(data)=>{
    // axios.post("https://65f5768841d90c1c5e098cc5.mockapi.io/users",action.payload)
    // .then(()=>{
    //     alert("data added")
    // }).catch(err=>console.log(err))

    try{
       await axios.post("https://65f5768841d90c1c5e098cc5.mockapi.io/users",data)
       alert("data added")
    }
    catch(err){console.log(err)}
}