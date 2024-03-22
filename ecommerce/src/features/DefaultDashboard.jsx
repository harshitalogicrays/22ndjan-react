import React from 'react'
import Header from './Header'

const DefaultDashboard = ({children}) => {
  return (
   <>
    <Header></Header>
    {children}
    
   </>
  )
}

export default DefaultDashboard
