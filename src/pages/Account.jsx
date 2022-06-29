import React from 'react'
import Watchlist from '../components/Watchlist'

const Account = () => {
  return (
    <>
     <div className='text-white w-full'>
     <img className=" w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/c18df626-e6fc-4dbb-818a-55d299b11842/IN-en-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />

     <div  className='fixed bg-black/60 top-0 left-0 w-full h-[550px]'>
     </div>
     <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>

      </div>

      </div> 
      <Watchlist/>
    </>
  )
}

export default Account
