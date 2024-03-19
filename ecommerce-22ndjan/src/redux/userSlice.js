import { createSlice ,nanoid} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{users:[]},
    reducers:{
        ADD_USER:(state,action)=>{
            console.log("add user",action.payload)
        //   postdata(action.payload)
        // state.users=[...state.users,{...action.payload,id:Date.now()}]
        state.users=[...state.users,{...action.payload,id:nanoid()}]
        },
        REMOVE_USER_ID(state,action){
            let filterproducts=state.users.filter((user)=>user.id != action.payload)
            state.users=filterproducts
        },
        REMOVE_USER_INDEX(state,action){
            state.users.splice(action.payload,1)
        }
    }
})
console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER_ID,REMOVE_USER_INDEX}=userSlice.actions
export default userSlice.reducer

export const selectUsers=state=>state.user.users

