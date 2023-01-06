import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../BASE_URL';

export default function MyProfileScreen() {
    const [userData,setUserData]=useState({});
    const fetchProfileData=async()=>{
        await axios.get(`${BASE_URL}/user/63b055b194b6100f5ef1128f/getuserdetails`)
        .then(response=>{
            const newObj=response.data.result;
            setUserData(newObj);
            console.log(newObj)
        })
        .catch(err=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        fetchProfileData();
    },[])
  return (
    <section className='flex flex-col  mb-20 text-[#023047] justify-around items-center   rounded-md mx-72 bg-[#caf0f8] shadow-2xl shadow-grey-500 h-fit py-10 my-6'>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>Username</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.username}</p>
        </div>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>Phone Number</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.phonenumber}</p>
        </div>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>School</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.schoolname}</p>
        </div>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>Stream</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.stream}</p>
        </div>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>High School Percentage</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.hightschoolper}</p>
        </div>
        <div className='flex m-2 p-2 w-64 justify-evenly'>
            <h3 className='text-lg-[#023047] font-bold'>Intermediate Percentage</h3>
            <p className='text-md text-orange-800 font-semibold'>{userData.intermediateper}</p>
        </div>
    </section>
  )
}
