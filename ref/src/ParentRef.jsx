import React, { useRef } from 'react'
import ChildRef from './ChildRef'

const ParentRef = () => {
    let txtRef=useRef()
  return (
    <div>
        parent comp
        <button type="button"
        onClick={()=>txtRef.current.focus()}>focus</button>
      <ChildRef  ref={txtRef} />
    </div>
  )
}

export default ParentRef
