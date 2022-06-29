import React, { useContext, useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from "react-icons/md" 
import { AuthState } from '../context/AuthContext'
import { db } from '../firebase/firebase.config'
 import {doc,onSnapshot, updateDoc} from "firebase/firestore"
 import {AiOutlineClose} from "react-icons/ai"
const Watchlist = () => {
    const [movies,setMovies]=useState([])
    const slideLeft=()=>{
        var slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideRight=()=>{
        var slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft+500
    }
    const {user}=useContext(AuthState)

    useEffect(()=>{
            onSnapshot(doc(db,"users",`${user?.email}`),(doc)=>{
                setMovies(doc.data()?.Watchlist)
            })
    },[user?.email])
        const referenceAcc=doc(db,"users",`${user.email}`)
    const deleteMovie=async(id)=>{
try {
    const res=movies.filter(e=>e.id!==id)
    await updateDoc(referenceAcc,{
        Watchlist:res
    })
    
} catch (e) {
    console.log(e.message);
}
    }
  return (
    <div>
       <h2 className='text-white font-bold md:text-xl p-4'>My Watchlist</h2>
     <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block "/>
        <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {
                    movies.map(e=>(
                        <div key={e.id} className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer  relative p-2 ">
                        <img src={`http://image.tmdb.org/t/p/w500${e?.image}`} alt={e.title} className="w-full h-auto block" />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='whitespace-normal text-xs md:text-sm  font-bold flex justify-center items-center h-full text-center'>{e?.title}</p>
                            <p onClick={()=>{
                                deleteMovie(e.id)
                            }} className='absolute text-gray-300 top-4 left-4' ><AiOutlineClose/></p>
                        </div>
                    
                    </div>
                    ))
                }
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "/>
        </div> 
    </div>
  )
}

export default Watchlist

