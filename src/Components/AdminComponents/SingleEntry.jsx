import React from 'react'

export default function SingleEntry() {
    return (
        <div className='flex h-fit my-2 rounded-md items-center justify-around text-md'>
            <h1 className='bg-[#cae9ff] rounded-sm w-full py-2 px-2 text-[#023047] text-lg font-semibold'>Entry name</h1>
            <button className='bg-[#023047] py-2 px-3 rounded-sm text-white'>count</button>
        </div>
    )
}
