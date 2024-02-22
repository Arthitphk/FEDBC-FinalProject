import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CoursesImg from "./CoursesImg"
import axios from "axios";
import Heading from "../Components/Heading"

type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}





const AllCourses = () => {

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`https://f5e54a3d-89aa-494d-bc79-13f3dfeb898e-00-1fgkmlcmh01cz.riker.replit.dev/courses`);
          setData(res.data);
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        setSearchResults(data.filter((x: Courses) => x.name.toLowerCase().includes(query)));},
    [query, data]);



  return (

    <div className="container mx-auto mb-10">
        <div className="flex items-center p-5 ml-5">
            <div className="flex ">
                    <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-slate-300 dark:bg-white p-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true"className="pointer-events-none absolute w-5 fill-gray-500 transition">
                        <path  d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input type="text" className="w-full max-w-[160px] bg-slate-300 dark:bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
                    <input type="button" value="Search" className="bg-blue-700 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"/>
            </div>
            
        </div>
        <Heading title="Recommeneded Courses"/>
        <div className="flex flex-row flex-wrap justify-around gap-5">
            {searchResults.map((courses: Courses) => (
                <div key={courses.id}>
                    <div   className="w-80 p-4 bg-white dark:bg-gray-700 rounded-3xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={CoursesImg(courses.id)}/>
                        <div className="p-4">
                            <h2 className="text-xl  font-semibold dark:text-white">{courses.name}</h2>
                            <p className="text-gray-600 dark:text-white">{courses.description}</p>
                            <p className="text-gray-600 font-bold dark:text-white">{courses.category}</p>
                            <div className="flex justify-between items-center mt-4">
                                <Link to={`/Lecture?course_id=${courses.id}`}>
                                    <button className="bg-yellow-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Open Access</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default AllCourses

