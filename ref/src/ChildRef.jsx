import React, { forwardRef } from 'react'

const ChildRef =forwardRef((props,ref) => {
    return (
      <div>
        <hr/>
        child comp
        <input type="text" ref={ref}/>
      </div>
    )
  })

export default ChildRef
