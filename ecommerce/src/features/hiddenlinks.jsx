import { useSelector } from "react-redux"
import { selectIsLoggedIn, selectuserRole } from "../redux/authSlice"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import {  Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const ShowonLogout=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(!isLoggedIn) return children
    else return null
}


export const ShowonLogin=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(isLoggedIn) return children
    else return null
}


export const Logout=()=>{
    const navigate=useNavigate()
    let handleLogout=()=>{
        signOut(auth).then(() => {
        toast.success('LoggedOut Successfully')
        navigate('/')
        }).catch((error) => {
        toast.error(error.message)
        });
    }

    return(
        <span onClick={handleLogout}><FaArrowAltCircleLeft/> Logout</span>
    )
}


export const Protected=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    const role=useSelector(selectuserRole)
    if(isLoggedIn && role=="user") return children
    else return <Navigate to='/login' replace={true}/>
}

export const ProtectedAdmin=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    const role=useSelector(selectuserRole)
    if(isLoggedIn && role=="admin") return children
    else return <Navigate to='/login' replace={true}/>
}
