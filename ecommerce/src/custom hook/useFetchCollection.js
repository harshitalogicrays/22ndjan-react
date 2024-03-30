
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { db } from '../firebase/config'
//custom hook - so we can not return jsx 
const useFetchCollection = (collectionname) => {
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{ getCollectionData()  },[])

    let getCollectionData=async()=>{
        setIsLoading(true)
        try{
            const docRef=collection(db,collectionname)
            const q=query(docRef,orderBy('createdAt','desc'))
            onSnapshot(q, (docSnap)=>{
                const allData=docSnap.docs.map((doc)=>({id:doc.id,...doc.data()}))
                setData(allData)
            })
            setIsLoading(false)
        }
        catch(error){
            toast.error(error.message)
            setIsLoading(false)
        }
    }
  return ({data,isLoading})
}

export default useFetchCollection
