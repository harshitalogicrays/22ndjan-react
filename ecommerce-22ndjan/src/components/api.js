import axios from "axios"

const baseURL="https://65f5768841d90c1c5e098cc5.mockapi.io/users"
export let postdata=async(data)=>{
    // axios.post("https://65f5768841d90c1c5e098cc5.mockapi.io/users",action.payload)
    // .then(()=>{
    //     alert("data added")
    // }).catch(err=>console.log(err))

    try{
       await axios.post(baseURL,data)
       alert("data added")
    }
    catch(err){console.log(err)}
}

export let getData=async()=>{
    try{
        let res=await axios.get(baseURL)
        console.log(res.data)
        return (res.data)
    }
    catch(err){alert(err)}
  
}