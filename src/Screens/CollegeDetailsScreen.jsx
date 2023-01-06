import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { BASE_URL } from '../../BASE_URL';
import CourseOfferedCard from '../Components/CollegeDetailsComponents.jsx/CourseOfferedCard';
import LoadingComponent from '../Components/LoadingComponent';

export default function CollegeDetailsScreen() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    // console.log(id);
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
        <div>
            {!loading && <div>
                <h1>{college.name}</h1>
                <p>{college.description}</p>
                <div>
                    {
                        courses.map(course=>{
                            return (
                            <CourseOfferedCard cardId={course} key={course}>course</CourseOfferedCard>
                            )
                        })
                    }
                </div>
            </div>}
            {loading && <LoadingComponent/>}
        </div>
    )
}
