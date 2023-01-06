import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import ReactSelect from 'react-select';
import { BASE_URL } from '../../BASE_URL';

export default function AddDetailsScreen() {
  const [schoolname, setSchoolName] = useState("");
  const [hightschoolper, setHigh] = useState();
  const [intermediateper, setInter] = useState();
  const [stream, setStream] = useState();

  const navigate=useNavigate();
  const handleSubmit = async () => {
    // console.log(phone, password);
    axios.post(`${BASE_URL}/user/63b055b194b6100f5ef1128f/updateprofile`, {
      schoolname,
      hightschoolper,
      intermediateper,
      stream
    }).then(response => {
      console.log(response);
    //   alert("Successfully registed")
      navigate("/home");
    }).catch(err => {
      console.log(err);
      alert("Try Again");
    })
  }
  return (
    <section className='flex flex-col mb-20 text-[#023047] justify-around items-center   rounded-md mx-72 bg-[#caf0f8] shadow-2xl shadow-grey-500 h-fit my-6'>
      <div className='flex flex-col m-5'>
        <div className='flex flex-col m-3'>
          <label htmlFor="schoolname">School Name</label>
          <input onChange={e => setSchoolName(e.target.value)} className='h-8 px-2 bg-white  border rounded-md' type="text" name="schoolname" id="schoolname" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="highper">High School Percentage</label>
          <input onChange={e => setHigh(e.target.value)} className='h-8 px-2 bg-white  border rounded-md' type="number" name="highper" id="highper" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="interper">Intermediate Percentage</label>
          <input onChange={e => setInter(e.target.value)} className='h-8 px-2 border rounded-md' type="number" name="interper" id="interper" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="stream">Stream</label>
          <ReactSelect id='tenure' className='' options={[
                    { value: 'science', label: 'Science' },
                    { value: 'commerce', label: 'Commerce' },
                    { value: 'arts', label: 'Arts' }
                ]} placeholder={"Choose Stream"} />
        </div>
        <button onClick={handleSubmit} className='h-10 w-fit px-5 m-5 rounded-md text-white bg-[#ffb703]'>Update Details</button>
        
      </div>
    </section>
  )
}
