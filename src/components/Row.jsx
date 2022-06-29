import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {MdChevronLeft,MdChevronRight} from "react-icons/md" 
import Movie from './Movie'
const Row = ({title,Api,rowId}) => {

    const [movies,setMovies]=useState([])

    useEffect(()=>{
        axios.get(Api).then(({data})=>setMovies(data.results))
    },[Api])
        const slideLeft=()=>{
            var slider=document.getElementById("slider"+rowId)
            slider.scrollLeft=slider.scrollLeft-500
        }
        const slideRight=()=>{
            var slider=document.getElementById("slider"+rowId)
            slider.scrollLeft=slider.scrollLeft+500
        }
    return (
    <>
     <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
     <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className="bg-white left-0 rounded-full opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block "/>
        <div id={'slider'+rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                {
                    movies.map(e=>(
                       <Movie e={e} key={e.id}/>
                    ))
                }
        </div>
        <MdChevronRight onClick={slideRight} size={40} className="bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "/>
        </div> 
    </>
  )
}

export default Row
