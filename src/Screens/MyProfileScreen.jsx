import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../BASE_URL';
import { UserContext } from '../UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from '../Components/LoadingComponent';

export default function MyProfileScreen() {
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);
    const [requestLoading, setRequestLoading] = useState();
    const [call, setCall] = useState();
    const notify = (message) => toast(message);

    const bookSession = async () => {
        await axios.post(`${BASE_URL}/user/counsellingrequest/${user.userId}`)
            .then(response => {
                if (response.status === 201) {
                    notify("Session Booked")
                }
                else if (response.status === 409) {
                    notify("Already Booked");
                }
                else {
                    notify("Error occured")
                }
            })
            .catch(err => {
                notify("Already Booked");
            })
    }
    const fetchBookingStatus = async () => {
        await axios.get(`${BASE_URL}/user/counsellingrequest/${user.userId}`)
            .then(response => {
                console.log(response.data.response);
                setCall(response.data.response);

            })
            .catch(error => {
                console.log(error);
            })
        setRequestLoading(false);
    }
    const fetchProfileData = async () => {
        await axios.get(`${BASE_URL}/user/${user.userId}/getuserdetails`)
            .then(response => {
                const newObj = response.data.result;
                setUserData(newObj);
                // console.log(newObj);
                setLoading(false);

            })
            .catch(err => {
                notify(err.message);
            })
    }
    useEffect(() => {
        fetchProfileData();
        fetchBookingStatus();
    }, [])
    return (
        <>
            {
                !loading &&
                <section className='flex flex-col  mb-20 text-[#023047] justify-around items-center   rounded-md mx-72 bg-[#caf0f8] shadow-2xl shadow-grey-500 h-fit py-10 my-6'>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>Username</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.username}</p>
                    </div>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>Phone Number</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.phonenumber}</p>
                    </div>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>School</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.schoolname}</p>
                    </div>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>Stream</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.stream}</p>
                    </div>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>High School Percentage</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.hightschoolper}</p>
                    </div>
                    <div className='flex m-2 p-2 w-64 justify-evenly'>
                        <h3 className='text-lg-[#023047] font-bold'>Intermediate Percentage</h3>
                        <p className='text-md text-orange-800 font-semibold'>{userData.intermediateper}</p>
                    </div>
                    {
                        !userData.schoolname &&
                        <Link to='/adddetails' className='bg-[#03045e] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Add Details</Link>
                    }
                    {
                        userData.schoolname && !call &&
                        <button onClick={bookSession} to='/adddetails' className='bg-[#03045e] border  my-4 py-2  px-4 text-white mx-2 rounded-md'>Book Session just ₹ 99</button>
                    }
                    {
                        userData.schoolname && call &&
                        <a href={call.callLink} target="_blank" className='flex m-2 p-2 w-64 justify-evenly'>
                            <h3 className='text-lg-[#023047] font-bold'>Call Link</h3>
                            <p className='text-md text-orange-800 font-semibold'>{call.callLink}</p>
                        </a>
                    }
                    <ToastContainer />
                </section>
            }
            {
                loading && <LoadingComponent />
            }
        </>
    )
}
