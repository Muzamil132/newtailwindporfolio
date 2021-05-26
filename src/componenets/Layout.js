import React ,{useState} from 'react'
import Sidebar from './Sidebar'

import {MenuAlt2Icon,XIcon } from '@heroicons/react/solid'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Layout = ({children,darkTheme,setDarkTheme}) => {

    const them=useTheme()
    const matches=useMediaQuery(them.breakpoints.up('sm'))
            const [show,setShow]= useState(false)
    return (
        <div>
          <div onClick={()=>setShow(!show)} className="h-13 w-16 cursor-pointer flex justify-center items-center  bg-green-500">
            {
               !matches && !show &&<MenuAlt2Icon  className="w-10 h-10"/>
            }  
          </div>
        {  
            !matches && show && 
            <div onClick={()=>setShow(!show)} className="h-13  cursor-pointer flex justify-center items-center  bg-dark-third ">
           <XIcon  className="w-8 h-8 text-fbw"/>
             
          </div>
        }  
     
        <div className="flex">
      
      {
      matches   || show &&  <Sidebar   darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      } 
      {
      matches  &&  <Sidebar   darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      } 
        {children}
        </div>
           </div>
    )
}

export default Layout
