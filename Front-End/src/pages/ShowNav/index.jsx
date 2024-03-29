import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function ShowNav({children}) {

    const location= useLocation();
    const [showNav,setShowNav]=useState(false)
    
    useEffect(()=>{
        if(location.pathname==='/login-register'){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    },[location])

  return (
    <div>{showNav && children}</div>
  )
}
