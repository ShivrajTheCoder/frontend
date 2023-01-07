import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../../../BASE_URL';
import LoadingComponent from '../../LoadingComponent';

export default function ConsultRequestCard(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [meetLink, setMeetLink] = useState();
    const [user, setUser] = useState()
    const { requestee } = props.request;

    const navigate=useNavigate();
    const handleSendLink=async()=>{
        if(meetLink){
            axios.post(`${BASE_URL}/admin/acceptrequest/${props.request._id}`,{
                callLink:meetLink
            })
                .then(response=>{
                    console.log(response);
                    setMeetLink("");
                    navigate("/")
                })
                .catch(err=>{
                    console.log(err);
                })
        }
    }
    // console.log(props.request)
    const fetchUser = async () => {
        // console.log(requestee)
        await axios.get(`${BASE_URL}/admin/getuserdetails/${requestee}`)
            .then(res => {
                // console.log(res.data.result);
                if (res.status === 200) {
                    setUser(res.data.result);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                console.log(err);
            })

    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className='flex flex-col w-64 shadow-2xl m-3 p-3 rounded-md text-[#023047]'>
            {
                isLoading && <LoadingComponent />
            }
            {
                !isLoading &&
                <div className='flex flex-col w-64 shadow-2xl m-3 p-3 rounded-md text-[#023047]'>
                    <h1 className='font-semibold text-lg '>{user.username}</h1>
                    <p>{user.phonenumber}</p>

                    {
                        !props.request.callLink &&
                        <div>
                            <label htmlFor="" className='text-md font-semibold' >Enter Link</label>
                            <input onChange={e => setMeetLink(e.target.value)} className='bg-[#cae9ff] rounded-sm w-full my-2 text-[#023047] text-lg font-semibold' type="text" />
                            <button className='bg-[#023047] text-white py-1 rounded-md w-full' onClick={handleSendLink}>Send Link</button>
                        </div>

                    }
                    {
                        props.request.callLink &&
                        <div>
                            <label htmlFor="" className='text-md font-semibold' >Meet Link</label>
                            <div className='bg-[#cae9ff] h-fit flex flex-wrap p-2 rounded-sm w-full my-2 text-[#023047] text-lg font-semibold' type="text" >
                                {props.request.callLink}
                            </div>
                            <button className='bg-[#023047] text-white py-1 rounded-md w-full'>Link Sent</button>
                        </div>
                    }

                </div>
            }
        </div>
    )
}
