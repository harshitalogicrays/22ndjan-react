import React, { useEffect, useState } from 'react'

const AlertMessage = ({msg}) => { //props={msg:"hello"}
    let [error,setError]=useState('')
    let [message,setMessage]=useState('')
    useEffect(()=>{
        try{
            if(typeof(msg)!='string' || msg ==''){
                throw new Error('should be string and not empty')
            }
            else{setMessage(msg)}
        }
        catch(error){
            setError(error.message)
        }
    },[])
   
return (<div>
    {error.length == 0 ? <> {message}</> : <>{error}</>}
   
</div>)
}

export default AlertMessage
