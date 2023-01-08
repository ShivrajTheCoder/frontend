import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from '../../../BASE_URL';
import { UserContext } from '../../UserContext';
import LoadingComponent from '../LoadingComponent';
import SingleEntry from './SingleEntry'

export default function AllEntries() {
  const [entities, setEntities] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);
  const config = {
    headers: { Authorization: `Bearer ${user.token}` }
  };
  const fetchWebDetails = async () => {
    await axios.get(`${BASE_URL}/admin/getwebsitedetails`, config)
      .then(response => {
        console.log(response.data.data);
        if (response.status === 200) {
          setEntities(response.data.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
  }
  useEffect(() => {
    fetchWebDetails();
  }, [])
  return (
    <section className='flex flex-col w-[60%] m-6 text-[#023047] bg-[#edf2f4] p-4 rounded-md'>
      {
        isLoading && <LoadingComponent />
      }
      {
        !isLoading &&
        <div className='flex flex-col '>
          <SingleEntry count={entities.collegeCount} name="College Count" />
          <SingleEntry count={entities.professionCount} name="Profession Count" />
          <SingleEntry count={entities.courseCount} name="Course Count" />
        </div>
      }
    </section>
  )
}
