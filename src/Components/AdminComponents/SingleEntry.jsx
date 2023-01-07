import React from 'react'

export default function SingleEntry(props) {
    return (
        <div className='flex h-fit my-2 rounded-md items-center justify-around text-md'>
            <h1 className='bg-[#cae9ff] rounded-sm w-full py-2 px-2 text-[#023047] text-lg font-semibold'>{props.name}</h1>
            <button className='bg-[#023047] border border-[#023047] w-20 py-2 px-3 rounded-sm text-white font-bold text-xl'>{props.count}</button>
        </div>
    )
}
