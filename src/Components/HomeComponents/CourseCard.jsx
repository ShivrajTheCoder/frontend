import React from 'react'

export default function CourseCard(props) {
  return (
    <main className='flex p-4 m-4 w-72 flex-col border shadow-xl rounded-xl items-center'>
        <h1 className='text-lg font-bold text-[#023047] mb-3 mr-auto'>{props.course.name}</h1>
        <p>{props.course.description.substring(0,200)}</p>
        <div className='mt-auto flex flex-col '>
            <button className='text-md border mt-3 bg-[#ffb703] text-white py-1 px-2 rounded-md'><span >Stream :</span> {props.course.stream}</button>
            <button><span>Duration-</span> {props.course.duration}</button>
        </div>
    </main>
  )
}
