import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
  const navigate=useNavigate();
  return (
    <nav className='h-10 p-2 mb-10 flex items-center flex-wrap'>
            {/* <img className='h-8 w-auto mr-96' src={require("../assets/logo1.png")} alt="" /> */}
            <div className='ml-auto hidden sm:block'>
                <div className='flex items-center '>
                    <button className='mx-2'>Home</button>
                    <button className='mx-2'>About Us</button>
                    <button className='mx-2'>Contact Us</button>
                    <button className='mx-2'>How it works</button>
                    <button onClick={()=>navigate("/")} className='bg-[#E3DCF7] border  my-2 py-2  px-4 text-[#023047] mx-2 rounded-md'>Login</button>
                    <button onClick={()=>navigate("/signup")} className='bg-[#fb8500] border  my-2 py-2  px-4 text-white mx-2 rounded-md'>Register</button>
                </div>
            </div>
        </nav>
  )
}
