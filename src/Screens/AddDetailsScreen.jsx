import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import ReactSelect from 'react-select';
import { BASE_URL } from '../../BASE_URL';
import { UserContext } from '../UserContext';

export default function AddDetailsScreen() {
  const [schoolname, setSchoolName] = useState("");
  const [hightschoolper, setHigh] = useState();
  const [intermediateper, setInter] = useState();
  const [stream, setStream] = useState();
  const {user}=useContext(UserContext);
  const navigate=useNavigate();
  const handleSubmit = async () => {
    // console.log(phone, password);
    axios.post(`${BASE_URL}/user/${user.userId}/updateprofile`, {
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
          <select onChange={e=>{
            setStream(e.target.value)
          }}>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
          </select>
        </div>
        <button onClick={handleSubmit} className='h-10 w-fit px-5 m-5 rounded-md text-white bg-[#ffb703]'>Update Details</button>
        
      </div>
    </section>
  )
}
