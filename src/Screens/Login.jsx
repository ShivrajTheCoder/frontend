import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../BASE_URL';
import { UserContext } from '../UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  {/* <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button> */}

  const notify = (message) => toast(message);

  const handleLogin = async () => {
    // console.log(phone, password);
    const phoneReg = /^\d{10}$/
    if (phoneReg.test(phone) && password.length >= 5) {
      await axios.post(`${BASE_URL}/authentication/login`, {
        phonenumber: phone,
        password
      })
        .then(async response => {
          console.log(response.data);
          if (response.status === 200) {
            await setUser(response.data);
            // console.log(user);
            navigate("/home")
            notify();
          }
        }).catch(err => {
          console.log(err);
          navigate("/");
          notify(err.message);
        })
    }
    else {
      notify("Incorrect Details");
      navigate("/")
    }

  }
  return (
    <section className='flex flex-col mb-20 text-[#023047] justify-around items-center   rounded-md mx-72 bg-[#caf0f8] shadow-2xl shadow-grey-500 h-80 my-6'>
      <div className='flex flex-col m-5'>
        <div className='flex flex-col m-3'>
          <label htmlFor="phone">Mobile number</label>
          <input onChange={e => setPhone(e.target.value)} className='h-8 px-2 bg-white  border rounded-md' type="tel" name="phone" id="phone" />
        </div>
        <div className='flex flex-col m-3'>
          <label htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} className='h-8 px-2 border rounded-md' type="password" name="password" id="password" />
        </div>
        <button onClick={handleLogin} className='h-10 w-20 m-5 rounded-md text-white bg-[#ffb703]'>Login</button>
        <p className='mx-5 text-[#023047] text-sm'>
          Not a user ?<a className='underline mx-2' href="/signup">become one</a>
        </p>
      </div>
      <ToastContainer />
    </section>
  )
}
