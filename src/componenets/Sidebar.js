import React ,{useEffect,useState,useRef} from 'react'
import moonIcon from '../assets/images/moon.svg'

import sunIcon from '../assets/images/sun.svg'
import { HomeIcon,AcademicCapIcon,AdjustmentsIcon,ArchiveIcon,LocationMarkerIcon,ViewGridIcon,UserCircleIcon } from '@heroicons/react/solid'
import Iconn from './Icon'
const Sidebar = ({darkTheme,setDarkTheme}) => {

const [focus,setFocus]=useState(false)
// const ref =useRef()
//   useEffect(()=>{
//    document.addEventListener('onMouseEnter',(event)=>{
//     if(!ref.current.contains(event.target)){
//    setFocus(false)
//     }
//    })
//   },[])

    return (
        <div  className="h-screen sticky top-0  flex flex-col w-28 dark:bg-dark-second  bg-white">
         <div onClick={()=>setDarkTheme(!darkTheme)} className=" flex justify-center cursor-pointer text-white py-4 bg-green-500">
           {
               darkTheme?<img className="w-7"  src={moonIcon}/>:<img className="w-7"  src={sunIcon}/>
           }
         </div>
         <div className="flex-1 dark:bg-dark-second  bg-white">
             <div className="py-8 flex flex-col  justify-center">
              <Iconn  link="/" Icon={HomeIcon} />
              <Iconn link="/About" Icon={UserCircleIcon} />
              <Iconn link="/services"  Icon={ViewGridIcon} />
              <Iconn link="/profile"  Icon={AdjustmentsIcon} />
              <Iconn link="/academia"  Icon={AcademicCapIcon} />
              <Iconn  Icon={ArchiveIcon} />

             </div>
         </div>
         <div className="bg-green-500 relative py-3" onMouseEnter={()=>setFocus(true)}  onMouseLeave={()=>setFocus(false)} >
             <h1  className="text-center text-white">
                 social
             </h1>
             <div className="px-3">
              <hr/>
             </div>
             <div className={` ${focus?"visible":"invisible"}  flex justify-evenly items-center absolute left-16 rounded-r-full  bg-gray-200 h-12 w-56 bottom-0 `}>
               <div className=" text-gray-500   h-8 w-8 flex rounded-full bg-white  justify-center items-center">
               <i class="fab fa-facebook-f"></i>
               </div>
               <div className=" text-gray-500   h-8 w-8 flex rounded-full bg-white  justify-center items-center">
               <i class="fab fa-github"></i>
               </div>
               <div className=" text-gray-500  h-8 w-8 flex rounded-full bg-white  justify-center items-center">
               <i class="fab fa-linkedin-in"></i>
               </div>
             </div>
          
         </div>
        </div>
    )
}

export default Sidebar