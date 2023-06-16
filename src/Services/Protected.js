import React from 'react'
import { Outlet, Navigate } from 'react-router';

 const Protected = () => {
    const auth = localStorage.getItem("loggedin");
    return auth ? <Outlet/> : <Navigate to={"/login"}/>
  
}

export default Protected;