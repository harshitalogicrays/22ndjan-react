import React, { useEffect, useRef } from 'react'

const Refdemo = () => {
    let textRef=useRef()
    let countRef=useRef()
    let handleClick=()=>{
        textRef.current.style.color="blue"
        alert(textRef.current.value)
    }
    useEffect(()=>{
        textRef.current.focus()
    },[])
  return (
    <div className='container col-6'>
      <div class="mb-3">
        <input type="text"  class="form-control" ref={textRef} />
     </div>
      <button type="button" class="btn btn-primary"  onClick={handleClick}>
        Button
      </button>   
      <br/><br/>
        <button type="button" onClick={()=>countRef.current.value > 1 && countRef.current.value--}>-</button>
        <input type="text" style={{width:'40px',textAlign:'center'}}
        defaultValue={1} ref={countRef}/>
        <button type="button" onClick={()=>countRef.current.value++}>+</button>

    </div>
  )
}

export default Refdemo
