import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'
import './App.css'


function App() {
      const[token, setToken]=useState(null);
  return (
    <>
    <div className='background1'>
        <div className='background2'> 
              <SignUpForm token={token} setToken={setToken}/>
              <Authenticate token={token} setToken={setToken}/>
        </div>
    </div>
    </>
  )
}

export default App
