import React from 'react'
import {Link,useLocation,useParams} from 'react-router-dom'

const Iconn = ({Icon,link}) => {
    const location=useLocation()
    const params=useParams()
 
    console.log(location)
   
    return (
        <div className={`flex justify-center align-center py-2`}>
          <Link to={link}  >
          <Icon  className={` ${link==location.pathname?"text-green-500":"text-gray-500"}   dark:hover:text-green-500  hover:text-green-500  w-5 h-5`}/> 
          </Link> 
        </div>
    )
}

export default Iconn
