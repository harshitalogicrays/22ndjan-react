import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
  let [password,setPassword]=useState('')
  let [length,setLength]=useState(6)
  let [numAllowed,setNumAllowed]=useState(false)
  let [charAllowed,setCharAllowed]=useState(false)
  let copyRef=useRef()

  let pwdGenerator=useCallback(()=>{
      let str='abcdefghijklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ'
      if(numAllowed){str += '0987654321'}
      if(charAllowed){str+= '!@#$%^&*()-+=.'} 
      let data=''
      for(let i=1;i<=length;i++){
          let index=Math.floor(Math.random()*str.length) //4
          data += str.charAt(index) // ehAoQy
      }
      setPassword(data)
    },[length,numAllowed,charAllowed])

// let pwdGenerator=()=>{
//   let str='abcdefghijklmnopqrstuvwxyzABCDEFGHJIKLMNOPQRSTUVWXYZ'
//   if(numAllowed){str += '0987654321'}
//   if(charAllowed){str+= '!@#$%^&*()-+=.'}

//   let data=''
//   for(let i=1;i<=length;i++){
//       let index=Math.floor(Math.random()*str.length) //4
//       data += str.charAt(index) // ehAoQy
//   }
//   setPassword(data)
// }
useEffect(()=>{
  pwdGenerator()
},[length,numAllowed,charAllowed])
  let handleCopy=()=>{
    copyRef.current.select()
    copyRef.current.setSelectionRange(0,5)
  }
  return (
    <div className='container col-6 m-5'>
    <div className='input-group'>
      <input
          type="text"
          name="password"
          class="form-control" value={password} ref={copyRef}
      />
      <button  type="button"  class="btn btn-primary"  onClick={handleCopy}>
        Copy
      </button>
      </div>
          <input type="range" min={4} max={100} value={length} 
          onChange={(e)=>setLength(e.target.value)}/> <label>Length ({length})</label>
          <input type="checkbox" onChange={()=>setNumAllowed(!numAllowed)}></input><label>Numbers</label>
          <input type="checkbox" onChange={()=>setCharAllowed(!charAllowed)}></input><label>Characters</label>
</div>
         
  )
}


export default PasswordGenerator
