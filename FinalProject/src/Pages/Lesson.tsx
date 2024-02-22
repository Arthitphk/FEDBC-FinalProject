import axios from 'axios';
import { useSearchParams} from "react-router-dom";
import CoursesVideo from "../Components/CoursesVideo"
import { Loading } from '../Components/Loading'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import Swal from 'sweetalert2'





type Courses = {
  id: number;
  name: string;
  description: string;
  category: string;
}



const Lesson = () => {

  const [ searchParams ] = useSearchParams()
  const coursesid = searchParams.get('course_id')
  const [coursesDetail, setCoursesDetail] = useState<Courses| null>(null);
  const [loading, setLoading] = useState(true)
 
  const videoend = () => {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your just finished this lesson",
      showConfirmButton: false,
      timer: 1500
    });
  }



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
        <div className='lg:container lg:mx-auto '>
            <div className=" p-4 rounded-t-lg shadow-md ml-5 mr-5 ">
            <ReactPlayer url={CoursesVideo(Number(coursesid))} controls width="100%" height="700px" onEnded={videoend}/>
            </div>
        </div>
        <div className='lg:container lg:mx-auto mb-52'>
            <div className=" p-4 bg-white dark:bg-gray-700 rounded-b-lg shadow-md ml-5 mr-5 ">
              <div className="p-4">
                <h1 className="text-xl  font-bold dark:text-white">Think Like Programmer 101</h1>
                <p className="text-gray-600 dark:text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eligendi. Veniam fugiat ullam obcaecati ad laborum officia, praesentium tempore, voluptatibus recusandae tenetur dignissimos quia totam unde, blanditiis incidunt id a!</p>
                <p className="text-gray-600 font-bold dark:text-white">{coursesDetail?.category}</p>
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Lesson