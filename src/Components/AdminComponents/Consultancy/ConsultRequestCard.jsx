import React from 'react'

export default function ConsultRequestCard() {
    return (
        <div className='flex flex-col w-64 shadow-2xl m-3 p-3 rounded-md text-[#023047]'>
            <h1 className='font-semibold text-lg '>Name</h1>
            <p>Phone Number</p>
            <div>
                <label htmlFor="" >Enter Link</label>
                <input className='bg-[#cae9ff] rounded-sm w-full my-2 text-[#023047] text-lg font-semibold' type="text" />
            </div>
            <button className='bg-[#023047] text-white py-1 rounded-md'>Send Link</button>
        </div>
    )
}
