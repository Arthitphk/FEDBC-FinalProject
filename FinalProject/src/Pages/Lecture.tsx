import axios from 'axios';
import { useSearchParams} from "react-router-dom";
import CoursesImg from "../Components/CoursesImg"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Images from '../Images/Bing.png'
import { Loading }  from '../Components/Loading'



const people = [
    {
      name: 'John Bing Xina ',
      role: 'CEO, Programmer',
      imageUrl:{Images},
    }
]


type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}


const Lecture = () => {
    const [ searchParams ] = useSearchParams()
    const coursesid = searchParams.get('course_id')
    const [coursesDetail, setCoursesDetail] = useState<Courses| null>(null);
    const [loading, setLoading]= useState(true)
   



    useEffect(() => {
        axios.get(`https://f5e54a3d-89aa-494d-bc79-13f3dfeb898e-00-1fgkmlcmh01cz.riker.replit.dev/courses/${coursesid}`)
            .then(response => {
                setCoursesDetail(response.data);
                setLoading(false)
            })
            .catch(error => {
            console.error('There was an error!', error);
            setLoading(false)
            });
        }, []);




        if (loading) {
            return <Loading/>
        }
           
                
       


  return (
    <div>
        <Navbar/> 
        <div className='container mx-auto mt-10'>
            <div className=" p-4 bg-white dark:bg-gray-700 rounded-3xl shadow-md ml-5 mr-5  ">
                <img className="w-full  object-cover rounded-3xl" alt="Card Image" src={CoursesImg(Number(coursesid))}/>
                <div className="p-4 flex flex-row gap-5 flex-wrap justify-between">
                    <div className='py-5'>
                        <h1 className="text-xl  font-bold dark:text-white mb-5">{coursesDetail?.name}</h1>
                        <p className="text-gray-600 dark:text-white mb-5">{coursesDetail?.description}</p>
                        <h2 className='text-xl  font-semibold dark:text-white mb-5'>Courese Contents</h2>
                        <Link to={`/Lesson?course_id=${coursesid}`}>
                            <button className="text-gray-600 dark:text-white text-xl  font-bold  cursor-pointer   hover:underline text-wrap"> 
                                Lesson: Start thinking like Programmer 
                            </button>
                        </Link>
                        <div className='ml-2 flex flex-row '>
                            <AccessTimeFilledIcon  className='dark:text-white'/>
                            <p className='ml-4 dark:text-white font-bold'>4 Hours</p>
                        </div>
                    </div>
                    <div className=" py-5  ">
                        <div className="">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl  tracking-tight dark:text-white sm:text-4xl">Instructors in This Course</h2>
                                <p className="mt-6 text-lg leading-8 dark:text-white ">
                                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                                suspendisse.
                                </p>
                            </div>
                            <ul role="list" className="">
                                {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                    <img className="h-16 w-16 rounded-full" src={Images} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight dark:text-white">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-teal-500">{person.role}</p>
                                    </div>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
           
            
        </div>
        <Footer/>
    </div>
  )
}

export default Lecture