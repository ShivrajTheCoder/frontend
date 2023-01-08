import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../BASE_URL';
import CourseOfferedCard from '../Components/CollegeDetailsComponents.jsx/CourseOfferedCard';
import LoadingComponent from '../Components/LoadingComponent';

export default function CollegeDetailsScreen() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [college, setCollege] = useState();
    const [courses, setCourses] = useState([]);
    const fetchCollege = async () => {
        // console.log("fetching colleges");
        // console.log(id);
        await axios.get(`${BASE_URL}/user/getcollege/${id}`)
            .then(response => {
                // console.log(response.data.response);
                setCollege(response.data.response, "college data")
                // console.log(college)
                setCourses(response.data.response.coursesOffered);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        fetchCollege();
    }, [])
    return (
        <div className='mx-32'>
            {!loading && <div>
                <h1 className='text-3xl mb-4 font-bold text-[#023047]'>{college.name}</h1>
                <p className='text-lg font-normal text-[#1d3557]'>{college.description}</p>
                <a href={college.official_site} target="_blank" type="button" className="bg-[#03045e] text-white m-3 rounded-md px-3 py-2">
                    Official Website
                </a>
                <div className='flex flex-wrap'>
                    {
                        courses.map(course => {
                            return (
                                <CourseOfferedCard cardId={course} key={course}>course</CourseOfferedCard>
                            )
                        })
                    }
                </div>
            </div>}
            {loading && <LoadingComponent />}
        </div>
    )
}
