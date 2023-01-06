import React from 'react'
import { Link } from 'react-router-dom'

export default function CollegeCard(props) {
  return (
    <Link to={`/college/${props.college._id}`} className='flex p-4 m-4 w-72 flex-col border shadow-xl rounded-xl items-center '>
        <h1 className='text-lg font-bold text-[#023047] mb-3 mr-auto'>{props.college.name}</h1>
        <p className='w-fit'>{props.college.description.substring(0,200)}</p>
        <div className='mt-auto flex flex-col '>
            <button className='text-md border mt-3 bg-[#ffb703] text-white py-1 px-2 rounded-md'> {props.college.type}</button>
            <button> {props.college.location}</button>
        </div>
    </Link>
  )
}