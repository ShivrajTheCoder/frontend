import { Switch } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select';
import { BASE_URL } from '../../../BASE_URL';
import LoadingComponent from '../../Components/LoadingComponent';

export default function AddCollegeScreen() {
  const [univ, setUni] = useState("Private");
  const [isLoading, setIsLoading] = useState(false);
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [location,setLocation]=useState("");
  const [courses,setCourses]=useState(["63b07ac337d6f9bd77ebca98","63b07a2f37d6f9bd77ebca92","63b079a7e34111c65a023d46"])
  
  const handleAddCollege=()=>{
    const data={
      name,description,type:univ,location,coursesOffered:courses
    }
    console.log(data);
    axios.post(`${BASE_URL}/admin/addcollege`,data)
      .then(response=>{
        console.log(response);
      })
      .catch(err=>{
        console.log(err);
      })
  }

  // const fetchCourses=async()=>{
  //   await axios.get(`${BASE_URL}/user/getallcourses`)
  //   .then(async response => {
  //     // console.log(response.data.result);
  //     setCourses(response.data.result)
  //     setIsLoading(false);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }
  // useEffect(() => {
  //  fetchCourses();
  // }, [])

  const toggler = () => {
    if (univ == 'Private') {
      setUni('Public')
    }
    else {
      setUni("Private");
    }
  }
  return (
    <main className='mx-32 my-10 flex flex-col justify-center items-center '>
      { !isLoading && 
        <section className="flex flex-col justify-center items-center w-full">
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Name</label>
            <input onChange={e=>setName(e.target.value)} className='w-80 bg-[#edf2f4] border rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          <div className='flex mr-52 my-4 items-center'>
            <Switch onClick={toggler} className='' />
            {
              univ === 'Private' ? <div className='mr-1 text-lg text-[#023047] font-semibold'>Private</div> : <div className='mr-1 text-lg text-[#023047] font-semibold'>Public</div>
            }
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Description</label>
            <input onChange={e=>setDescription(e.target.value)} className='w-80 h-80 bg-[#edf2f4] border rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Location</label>
            <input onChange={e=>setLocation(e.target.value)} className='w-80 bg-[#edf2f4] border rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          {/* <ReactSelect id='tenure' className='' options={[
            { value: 'science', label: 'Science' },
            { value: 'commerce', label: 'Commerce' },
            { value: 'arts', label: 'Arts' }
          ]} placeholder={"Choose Stream"} /> */}
          <button onClick={handleAddCollege}  className='bg-[#fb8500] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Add College</button>
        </section>
      }
      {
        isLoading && <LoadingComponent/>
      }
    </main>
  )
}
