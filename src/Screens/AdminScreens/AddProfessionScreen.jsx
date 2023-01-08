import { Switch } from 'antd'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ReactSelect from 'react-select';
import { BASE_URL } from '../../../BASE_URL';
import LoadingComponent from '../../Components/LoadingComponent';
import { UserContext } from '../../UserContext';

export default function AddProfessionScreen() {
  const [stream, setStream] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgurl, setImgUrl] = useState("");
  const [sucess, setSucess] = useState(false);
  const [failure, setFailure] = useState(false);

  const {user}=useContext(UserContext);
  const handleAddCourse = () => {
    setFailure(false);
    setSucess(false);
    const data = {
      name, description, stream, img_url:imgurl
    }
    // console.log(data,user.token);
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };
    axios.post(`${BASE_URL}/admin/addprofession`, data,config)
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
      <h1 className='text-2xl my-3 font-bold text-[#03045e]'>Enter Profession Details</h1>
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
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Image Url</label>
            <input onChange={e => setImgUrl(e.target.value)} className='w-80 bg-[#edf2f4] border px-2 py-1 rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          <ReactSelect id='stream' className='w-80 my-3 bg-[#edf2f4] border rounded-md shadow-sm ' onChange={e => { setStream(e.value); console.log(e.value) }} options={[
            { value: 'science', label: 'Science' },
            { value: 'commerce', label: 'Commerce' },
            { value: 'arts', label: 'Arts' }
          ]} placeholder={"Choose Stream"} />
          <button onClick={handleAddCourse} className='bg-[#03045e] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Add Profession</button>
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
