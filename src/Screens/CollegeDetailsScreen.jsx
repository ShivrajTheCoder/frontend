import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
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
        await axios.get(`${BASE_URL}/user/getallcolleges`)
            .then(response => {
                // console.log(response.data.result[0]);
                setCollege(response.data.result[0], "college data")
                // console.log(college)
                setCourses(response.data.result[0].coursesOffered);
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
                <button type="button" class="bg-gradient-to-r rounded-md px-3 py-2 from-green-400 to-blue-500 text-white mt-3 hover:from-pink-500 hover:to-yellow-500 ...">
                    Official Website
                </button>
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
