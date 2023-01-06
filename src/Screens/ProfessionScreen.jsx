import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../BASE_URL';
import LoadingComponent from '../Components/LoadingComponent';
import ProfessionCard from '../Components/ProfessionComponents/ProfessionCard';

export default function ProfessionScreen() {
  const [isLoading,setIsLoading]=useState(true);
  const [professions,setProfessions]=useState();
  const fetchAllProfessions=async()=>{
    axios.get(`${BASE_URL}/user/getallprofessions`)
      .then(response=>{
        console.log(response.data);
        setProfessions(response.data.professions);
        setIsLoading(false);
      })
      .catch(error=>{
        console.log(error);
      })
  }
  useEffect(()=>{
    fetchAllProfessions();
  },[])
  return (
    <main>
        {isLoading && <LoadingComponent/>}
        {
          !isLoading && <section className='mx-32 my-10'>

            {
              professions.map(profession=>{
                return (
                  <ProfessionCard profession={profession} key={profession._id}/>
                )
              })
            }
          </section>
        }
    </main>
  )
}
