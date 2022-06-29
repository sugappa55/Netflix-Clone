import React, { useContext } from 'react'
import {useNavigate} from "react-router-dom"
import AuthContext, { AuthState } from '../context/AuthContext'

const Navbar = () => {
  const navigate=useNavigate()
  const {user,logOut}=useContext(AuthState)

  const handleLogout=async()=>{
    try {
        await logOut()
        navigate("/")
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
     <h1 onClick={()=>navigate("/")} className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
   {user? (<div>
    <button onClick={()=>navigate("/account")} className='text-white pr-4'>Account</button>
     <button onClick={handleLogout} className='bg-red-600 px-6 py-2 text-white cursor-pointer rounded'>Logout</button>
   
    </div>):
    (<div>
      <button onClick={()=>navigate("/login")} className='text-white pr-4'>Sign In</button>
       <button onClick={()=>navigate("/signup")} className='bg-red-600 px-6 py-2 text-white cursor-pointer rounded'>Sign Up</button>
     
      </div>)
    }
   
     </div>
  )
}

export default Navbar
