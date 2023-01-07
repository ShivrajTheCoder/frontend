import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to="/admin/addcollege" className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add College</Link>
        <Link to="/admin/addcourses" className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add Course</Link>
        <Link to="/admin/addprofession" className='px-3 py-2 mx-2 bg-[#cae9ff] rounded-md'>Add Profession</Link>
      </div>
      <h1 className='text-2xl font-bold text-[#023047] mt-5'>Counselling Requests</h1>
      <ConsultRequestContainer/>
    </div>
  )
}
