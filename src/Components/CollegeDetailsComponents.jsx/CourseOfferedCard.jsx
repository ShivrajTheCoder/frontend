import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../BASE_URL';
import LoadingComponent from '../LoadingComponent';

export default function CourseOfferedCard(props) {
    const [loading,setLoading]=useState(true);
    const [course,setCourse]=useState({});
    const fetchCourse=()=>{
        axios.get(`${BASE_URL}/user/getcourse/${props.cardId}`)
        .then(response=>{
            console.log(response.data.response);
            setCourse(response.data.response)
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchCourse();
    },[])
  return (
    <div>
      {
        loading && <LoadingComponent/>
      }
      {
        !loading && <main className='flex p-4 m-4 w-72 flex-col border shadow-xl rounded-xl items-center'>
        <h1 className='text-lg font-bold text-[#023047] mb-3 mr-auto'>{course.name}</h1>
        <p>{course.description.substring(0,200)}</p>
        <div className='mt-auto flex flex-col '>
            <button className='text-md border mt-3 bg-[#ffb703] text-white py-1 px-2 rounded-md'><span >Stream :</span> {course.stream}</button>
            <button><span>Duration-</span> {course.duration}</button>
        </div>
    </main>
      }
    </div>
  )
}
