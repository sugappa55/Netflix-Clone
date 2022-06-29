import React, { useContext, useState } from 'react'
import { FaHeart,FaRegHeart} from "react-icons/fa"
import {AuthState} from "../context/AuthContext"
import { db } from '../firebase/firebase.config'
import {arrayUnion,doc,updateDoc} from "firebase/firestore"
const Movie = ({e}) => {
    const [like,setLike]=useState(false)
    const {user}=useContext(AuthState)

    const [saved,setSaved]=useState(false)
    const movieId=doc(db,"users",`${user?.email}`)

    const addToWatchlist=async()=>{
      if(user!==null){
        setLike(!like);
        setSaved(true);
        await updateDoc(movieId,{
          Watchlist:arrayUnion({
            id:e.id,
            title:e.title,
            image:e.backdrop_path
          })
        })
      }
      else alert("please log in")
    }

  return (
    <div key={e.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer  relative p-2 ">
    <img src={`http://image.tmdb.org/t/p/w500${e?.backdrop_path}`} alt={e.title} className="w-full h-auto block" />
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='whitespace-normal text-xs md:text-sm  font-bold flex justify-center items-center h-full text-center'>{e?.title}</p>
        <p onClick={addToWatchlist}>{like?<FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
    </div>

</div>
  )
}

export default Movie
