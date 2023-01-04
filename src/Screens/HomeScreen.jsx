import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../UserContext'

export default function HomeScreen() {
    const {user}=useContext(UserContext);
   const navigate= useNavigate();
    useEffect(()=>{
      
      if(!user){
        navigate("/")
      }
      else{
        console.log(user.userId);
      }
    })
  return (
    <div>
        {/* {user.userId} */}
        <h1>Hii</h1>
    </div>
  )
}
