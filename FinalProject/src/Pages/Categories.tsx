
import axios from 'axios';
import { useSearchParams} from "react-router-dom";
import CoursesImg from "../Components/CoursesImg"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
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
  const [coursesDetail, setCoursesDetail] = useState<Courses| null>(null);


  useEffect(() => {
    axios.get(`https://f5e54a3d-89aa-494d-bc79-13f3dfeb898e-00-1fgkmlcmh01cz.riker.replit.dev/courses/${coursesid}`)
        .then(response => {
            setCoursesDetail(response.data);
        })
        .catch(error => {
        console.error('There was an error!', error);
        });
    }, []);



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
        <div className="dark:bg-gray-700 py-24 sm:py-32 mt-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 dark:text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo eaque id earum temporibus veniam laborum similique obcaecati sunt reprehenderit dolores autem, facere commodi, magnam rerum atque voluptatibus perferendis soluta?
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="src\Images\Python-icon.png"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="src\Images\javascript-icon.png"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="src\Images\tensorflow-icon.png"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="src\Images\data-science-with-r-icon.png"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="src\Images\pngwing.com.png"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Categories