import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { UserContext } from '../UserContext'


export default function HomeScreen() {
    const {user}=useContext(UserContext);
   const navigate= useNavigate();
   const checkLogged=()=>{
    if(!user){
        if(!user){
            navigate("/")
          }
          else{
            console.log(user.userId);
          }
    }
}
    useEffect(()=>{
      checkLogged();
    })
  return (
    <div>
        {/* {user.userId} */}
        <h1>Hii</h1>
    </div>
  )
}
