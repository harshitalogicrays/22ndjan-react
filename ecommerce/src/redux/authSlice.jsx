import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{isLoggedIn:false, userEmail:null,userName:null,userRole:null,userId:null},
    reducers:{
        loginuser(state,action){
            let {userEmail,userName,userId,userRole}=action.payload
           state.isLoggedIn=true 
           state.userEmail=userEmail
           state.userId=userId
           state.userName=userName
           state.userRole=userRole
        },
        logoutuser(state,action){
            state.isLoggedIn=false
            state.userEmail=null
            state.userId=null
            state.userName=null
            state.userRole=null
        }
    }
})
export const {loginuser,logoutuser}=authSlice.actions
export default authSlice.reducer

export const selectIsLoggedIn=state=>state.auth.isLoggedIn
export const selectuserEmail=state=>state.auth.userEmail
export const selectuserName=state=>state.auth.userName
export const selectuserId=state=>state.auth.userId
export const selectuserRole=state=>state.auth.userRole