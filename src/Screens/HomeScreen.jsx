import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../BASE_URL';
import HomeBanner from '../Components/HomeBanner';
import CollegeCard from '../Components/HomeComponents/CollegeCard';
import CourseCard from '../Components/HomeComponents/CourseCard';
import { UserContext } from '../UserContext'


export default function HomeScreen() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [colleges, setColleges] = useState([]);

  const fetchCourses = async () => {
    console.log("fetching data")
    await axios.get(`${BASE_URL}/user/getallcourses`)
      .then(response => {
        console.log(response.data);
        setCourses(response.data.result)
        console.log(courses)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const fetchColleges=async()=>{
    console.log("fetching colleges");
    await axios.get(`${BASE_URL}/user/getallcolleges`)
      .then(response => {
        console.log(response.data);
        setColleges(response.data.result)
        // console.log(courses)
      })
      .catch(error => {
        console.log(error);
      })
  }
  const checkLogged = () => {
    if (!user) {
      if (!user) {
        navigate("/")
      }
      else {
        console.log(user.userId, "fetching data");
      }
    }
  }
  useEffect(() => {
    checkLogged();
    fetchCourses();
    fetchColleges();
  }, [])
  return (
    <section className='mx-32'>
      <HomeBanner />
      <h2 className='text-2xl font-bold text-[#023047] mt-5'>Courses To Choose From</h2>
      <section className='flex flex-wrap p-2 justify-around'>
        {
          courses.map(course => {
            return (
              <CourseCard course={course} key={course._id} />
            )
          })
        }
      </section>
      <h2 className='text-2xl font-bold text-[#023047] mt-5'>Colleges To Choose From</h2>
      <section className='flex flex-wrap p-2 justify-around'>
        {
          colleges.map(college => {
            return (
              <CollegeCard college={college} key={college._id} />
            )
          })
        }
      </section>
    </section>
  )
}
