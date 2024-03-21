import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Refdemo from './Refdemo'
import ParentRef from './ParentRef'
import PasswordGenerator from './PasswordGenerator'
import AlertMessage from './AlertMessage'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
  <>
    {/* <Refdemo/> */}

    {/* <ParentRef/> */}

    <ErrorBoundary>
         <PasswordGenerator/>
    </ErrorBoundary>

    <AlertMessage msg=""/>
  </>
  )
}

export default App
