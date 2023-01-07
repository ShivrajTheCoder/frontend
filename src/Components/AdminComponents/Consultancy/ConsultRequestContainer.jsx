import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../../BASE_URL'
import LoadingComponent from '../../LoadingComponent';
import ConsultRequestCard from './ConsultRequestCard'

export default function ConsultRequestContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState();
  const fetchAllRequests = async () => {
    await axios.get(`${BASE_URL}/admin/getallrequests`)
      .then(result => {
        // console.log(result.data);
        if (result.status == 200) {
          setRequests(result.data.response);

        }
      })
      .catch(err => {
        console.log(err);
      })
    setIsLoading(false);
  }
  useEffect(() => {
    fetchAllRequests();
  }, [])
  return (
    <div className='py-2 flex'>
      {
        isLoading && <LoadingComponent />
      }
      {
        !isLoading &&
        <div className='py-1 flex'>
          {
            requests.map(request=>{
              return (
                <ConsultRequestCard key={request._id} request={request}/>
              )
            })
          }
        </div>
      }
    </div>
  )
}
