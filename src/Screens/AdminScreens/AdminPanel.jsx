import React from 'react'
import AdminBtnContainer from '../../Components/AdminComponents/AdminBtnContainer'
import AllEntries from '../../Components/AdminComponents/AllEntries'
import ConsultRequestContainer from '../../Components/AdminComponents/Consultancy/ConsultRequestContainer'

export default function AdminPanel() {
  return (
    <div className='mx-32 my-10'>
      <div className='flex bg-[#023047] text-white rounded-md'>
        <AllEntries />
        <AdminBtnContainer />
      </div>
      <h1 className='text-2xl font-bold text-[#023047] mt-5'>Add Content</h1>
      <div className='my-3 flex'>
        <button className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add College</button>
        <button className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add Course</button>
        <button className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add Profession</button>
      </div>
      <h1 className='text-2xl font-bold text-[#023047] mt-5'>Counselling Requests</h1>
      <ConsultRequestContainer/>
    </div>
  )
}
