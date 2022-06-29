import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthState } from '../context/AuthContext'

const SignUp = () => {
  const [creds,setCreds]=useState({})
  const navigate=useNavigate()

  const {signUp} =useContext(AuthState)

  const handleChange=(e)=>{
    const {id,value}=e.target
    setCreds({
      ...creds,
      [id]:value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await signUp(creds.email,creds.password)
      navigate("/")
      
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
    <div className='w-full h-screen'>
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/c18df626-e6fc-4dbb-818a-55d299b11842/IN-en-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        <div className='bg-black/60 fixed left-0 top-0 w-full h-screen'>

        </div>
        <div className='w-full z-50 px-4 py-24 fixed'>
          <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16 '>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form  className='w-full flex flex-col py-4 ' onSubmit={(e)=>handleSubmit(e)}>
                  <input id="email" className='p-3 my-2 bg-gray-700 rounded' type="email"  placeholder='email' autoComplete='email'  onChange={handleChange} />
                  <input id="password" className='p-3 my-2 bg-gray-700 rounded'type="password"  placeholder='password' autoComplete='current-password' onChange={handleChange}/> 
                  <button className='bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                                 <div className='flex items-center justify-between text-sm text-gray-600'>
                                  <p><input type="checkbox" className='mr-2'/>Remember Me</p>
                                  <p>Need Help?</p>
                                 </div>
                                 <p className='py-8'>
                                  <span className='text-gray-600'>Already subscribed to Netflix?</span>{" "}
                                <Link to="/login">Sign In</Link>
                                 </p>
                                 </form>
              </div>
          </div>
        </div>
    </div>
      
    </>
  )
}

export default SignUp
