import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  // console.log(user);
  const handleLogout = () => {
    setUser(null);
    navigate("/")
  }
  return (
    <nav className='h-10 p-2 mb-10 flex items-center flex-wrap'>
      <div className='h-8 w-auto mr-96 text-3xl font-bold text-[#03045e]'>
        Career Point
      </div>
      <div className='ml-auto hidden sm:block'>
        <div className='flex items-center '>
          <Link to="/home" className='mx-2'>Home</Link>
          {
            user && !user.isAdmin &&
            <Link to="/adddetails" className='mx-2'>Update Details</Link>
          }
          <Link to="/professions" className='mx-2'>Professions</Link>

          {
            user && user.isAdmin &&
            <Link to="/admin/addcourses" className='mx-2'>Add Courses</Link>
          }
          {
            user && user.isAdmin &&
            <Link to="/admin/addprofession" className='mx-2'>Add Profession</Link>
          }
          {
            user && user.isAdmin &&
            <Link to="/admin/addcollege" className='mx-2'>Add College</Link>
          }
          {!user && <div className='flex'>
            <button onClick={() => navigate("/")} className='bg-[#E3DCF7] border  my-2 py-2  px-4 text-[#023047] mx-2 rounded-md'>Login</button>
            <button onClick={() => navigate("/signup")} className='bg-[#03045e] border  my-2 py-2  px-4 text-white mx-2 rounded-md'>Register</button>
          </div>}
          {
            user && <button onClick={handleLogout} className='mx-2 py-2 px-3 text-white rounded-md bg-[#03045e]'>Logout</button>
          }
          {
            user && !user.isAdmin &&
            <Link to="/myprofile" className='bg-[#E3DCF7] border  my-2 py-2  px-4 text-[#023047] mx-2 rounded-md'>{user.username}</Link>
          }
          {
            user && user.isAdmin && <Link to="/admin/adminpanel" className='bg-[#E3DCF7] border  my-2 py-2  px-4 text-[#023047] mx-2 rounded-md'>{user.username}</Link>
          }
        </div>
      </div>
    </nav>
  )
}
