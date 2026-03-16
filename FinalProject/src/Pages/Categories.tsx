
import axios from 'axios';
import { useSearchParams} from "react-router-dom";
import CoursesImg from "../Components/CoursesImg"
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";







type Courses = {
  id: number;
  name: string;
  description: string;
  category: string;
}



const Categories = () => {
  const [ searchParams ] = useSearchParams()
  const coursesid = searchParams.get('course_id')
  const [coursesDetail, setCoursesDetail] = useState<Courses | null>(null);
 

  useEffect(() => {
    axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses/${coursesid}`)
        .then(response => {
            setCoursesDetail(response.data);
        })
        .catch(error => {
        console.error('There was an error!', error);
        });
    }, [coursesid]);



  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-10">
                <div key={coursesDetail?.id}>
                  <h1 className='font-bold dark:text-white text-4xl mb-10 p-4'>{coursesDetail?.category}</h1>
                    <div   className="w-80 p-4 bg-white dark:bg-gray-700 rounded-3xl shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={CoursesImg(Number(coursesid))}/>
                        <div className="p-4">
                            <h2 className="text-xl  font-semibold dark:text-white">{coursesDetail?.name}</h2>
                            <p className="text-gray-600 dark:text-white">{coursesDetail?.description}</p>
                            <p className="text-gray-600 font-bold dark:text-white">{coursesDetail?.category}</p>
                            <div className="flex justify-between items-center mt-4">
                                <Link to={`/Lecture?course_id=${coursesDetail?.id}`}>
                                    <button className="bg-yellow-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Open Access</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        
    
    </div>
  )
}

export default Categories