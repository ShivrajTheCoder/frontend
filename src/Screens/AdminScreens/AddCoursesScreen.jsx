import { Switch } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select';
import { BASE_URL } from '../../../BASE_URL';
import LoadingComponent from '../../Components/LoadingComponent';

export default function AddCoursesScreen() {
  const [stream, setStream] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [sucess, setSucess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleAddCourse = () => {
    setFailure(false);
    setSucess(false);
    const data = {
      name, description, stream, duration
    }
    console.log(data);
    axios.post(`${BASE_URL}/admin/addcourse`, data)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          setSucess(true);
        }
        else{
          setFailure(true);
        }
      })
      .catch(err => {
        console.log(err);
        setFailure(true);
      })
  }

  return (
    <main className='mx-32 my-10 flex flex-col justify-center items-center '>
      {!isLoading &&
        <section className="flex flex-col justify-center items-center w-full">
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Name</label>
            <input onChange={e => setName(e.target.value)} className='w-80 px-2 py-1 bg-[#edf2f4] border rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Description</label>
            <textarea onChange={e => setDescription(e.target.value)} className='w-80 h-80 bg-[#edf2f4] px-2 py-1 border rounded-md shadow-sm ' type="text" name="name" id="name"></textarea>
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Duration</label>
            <input onChange={e => setDuration(e.target.value)} className='w-80 bg-[#edf2f4] border px-2 py-1 rounded-md shadow-sm ' type="number" name="name" id="name" />
          </div>
          <ReactSelect id='stream' className='w-80 my-3 bg-[#edf2f4] border rounded-md shadow-sm ' onChange={e => { setStream(e.value); console.log(e.value) }} options={[
            { value: 'science', label: 'Science' },
            { value: 'commerce', label: 'Commerce' },
            { value: 'arts', label: 'Arts' }
          ]} placeholder={"Choose Stream"} />
          <button onClick={handleAddCourse} className='bg-[#fb8500] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Add College</button>
        </section>
      }
      {
        isLoading && <LoadingComponent />
      }
      <div>
        {
          sucess && <div>Course Created</div>
        }
        {
          failure && <div>Failed To Add</div>
        }
      </div>
    </main>
  )
}
