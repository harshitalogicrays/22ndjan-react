import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/authSlice"
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"
import { useNavigate } from "react-router-dom"
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