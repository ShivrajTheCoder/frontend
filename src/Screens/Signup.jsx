import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../BASE_URL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {

  const notify = (message) => toast(message);

  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log(phone,password,username);
    const phoneReg = /^\d{10}$/;
    if (password === confirm && phoneReg.test(phone) && password.length >= 5 && username.length >= 5) {
      axios.post(`${BASE_URL}/authentication/signup`, {
        username,
        phonenumber: phone,
        password
      }).then(response => {
        console.log(response);
        if (response.status === 201) {
          notify("Sucessfully Registered");
          navigate("/");
        }
        else {
          notify(response.data.message);
        }
      }).catch(err => {
        notify(err.message);
      })
    }
    else {
      notify("Enter correct data");
      navigate("/signup");
    }
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
  }
  return (
    <section className='flex flex-col mb-20 text-[#023047] justify-around items-center   rounded-md mx-72 bg-[#caf0f8] shadow-2xl shadow-grey-500 h-fit my-6'>
      <div className='flex flex-col m-5'>
        <div className='flex flex-col m-3'>
          <label htmlFor="username">Username</label>
          <input onChange={e => setUsername(e.target.value)} className='h-8 px-2 bg-white  border rounded-md' type="text" name="username" id="username" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="phone">Mobile number</label>
          <input onChange={e => setPhone(e.target.value)} className='h-8 px-2 bg-white  border rounded-md' type="tel" name="phone" id="phone" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} className='h-8 px-2 border rounded-md' type="password" name="password" id="password" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="password">Confirm Password</label>
          <input onChange={e => setConfirmPassword(e.target.value)} className='h-8 px-2 border rounded-md' type="password" name="password" id="password" />
        </div>
        <button onClick={handleLogin} className='h-10 w-20 m-5 rounded-md text-white bg-[#03045e]'>Sign up</button>
        <p className='mx-5 text-[#023047] text-sm'>
          Already a user ?<a className='underline mx-2' href="/">Login</a>
        </p>
      </div>
      <ToastContainer />
    </section>
  )
}
