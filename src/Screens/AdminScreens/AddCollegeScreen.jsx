import { Switch } from 'antd'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ReactSelect from 'react-select';
import { BASE_URL } from '../../../BASE_URL';
import LoadingComponent from '../../Components/LoadingComponent';
import { UserContext } from '../../UserContext';

export default function AddCollegeScreen() {
  const [univ, setUni] = useState("Private");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  // const [courses, setCourses] = useState(["63b87b92ae8e2a18e4f5f998", "63b87b92ae8e2a18e4f5f99a", "63b87b92ae8e2a18e4f5f99b"])
  const [courses, setCourses] = useState([])
  const [sucess, setSucess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [coursesOff, setCousrsesOff] = useState([]);

  const { user } = useContext(UserContext);

  const handleAddCollege = () => {

    setFailure(false);
    setSucess(false);
    const data = {
      name, description, type: univ, location, coursesOffered: coursesOff
    }
    console.log(data);
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    axios.post(`${BASE_URL}/admin/addcollege`, data, config)
      .then(response => {
        console.log(response);
        if (response.status === 201) {
          setSucess(true);
        }
        else {
          setFailure(true);
        }
      })
      .catch(err => {
        console.log(err);
        setFailure(true);
      })
  }

  const fetchCourses = async () => {
    await axios.get(`${BASE_URL}/user/getallcourses`)
      .then(async response => {
        console.log(response.data.result);
        setCourses(response.data.result)
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetchCourses();
  }, [])

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
      {!isLoading &&
        <section className="flex flex-col justify-center items-center w-full">
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Name</label>
            <input onChange={e => setName(e.target.value)} className='w-80 bg-[#edf2f4] border rounded-md shadow-sm px-2 py-1' type="text" name="name" id="name" />
          </div>
          <div className='flex mr-52 my-4 items-center'>
            <Switch onClick={toggler} className='' />
            {
              univ === 'Private' ? <div className='mr-1 text-lg text-[#023047] font-semibold'>Private</div> : <div className='mr-1 text-lg text-[#023047] font-semibold'>Public</div>
            }
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Description</label>
            <textarea onChange={e => setDescription(e.target.value)} className='w-80 h-80 bg-[#edf2f4] px-2 py-1 border rounded-md shadow-sm ' type="text" name="name" id="name"></textarea>
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Location</label>
            <input onChange={e => setLocation(e.target.value)} className='w-80 bg-[#edf2f4] border rounded-md shadow-sm ' type="text" name="name" id="name" />
          </div>
          <div className='flex flex-col'>
            <label className='text-lg font-semibold text-[#023047]' htmlFor="name">Select Courses</label>
            <select className='w-80 h-32  bg-[#edf2f4] px-2 py-1 border rounded-md shadow-sm ' onChange={e => {
              console.log(e.target.value);
              if (coursesOff.indexOf(e.target.value) == -1) {
                setCousrsesOff([...coursesOff, e.target.value])
              }
            }}
               multiple>

              {
                !courses && <LoadingComponent />
              }
              {
                courses.map(c => {
                  return (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  )
                })
              }
            </select>
          </div>
          {/* <ReactSelect id='tenure' className='' options={[
            { value: 'science', label: 'Science' },
            { value: 'commerce', label: 'Commerce' },
            { value: 'arts', label: 'Arts' }
          ]} placeholder={"Choose Stream"} /> */}
          <button onClick={handleAddCollege} className='bg-[#fb8500] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Add College</button>

        </section>
      }
      {
        isLoading && <LoadingComponent />
      }
      <div>
        {
          sucess && <div>College Created</div>
        }
        {
          failure && <div>Failed To Add</div>
        }
      </div>
    </main>
  )
}
