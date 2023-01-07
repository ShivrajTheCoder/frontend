import React from 'react'
import SingleEntry from './SingleEntry'

export default function AllEntries() {
  return (
    <div className='flex flex-col w-[60%] m-6 text-[#023047] bg-[#edf2f4] p-4 rounded-md'>
      <SingleEntry/>
      <SingleEntry/>
      <SingleEntry/>
      <SingleEntry/>
    </div>
  )
}
