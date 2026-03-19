import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import CoursesVideo from "../Components/CoursesVideo"
import { Loading } from '../Components/Loading'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import Swal from 'sweetalert2'

import BookIcon from '@mui/icons-material/Book';

import DescriptionIcon from '@mui/icons-material/Description';




type Courses = {
  id: number;
  name: string;
  description: string;
  category: string;
}



const Lesson = () => {

  const [searchParams] = useSearchParams()
  const coursesid = searchParams.get('course_id')
  const [coursesDetail, setCoursesDetail] = useState<Courses | null>(null);
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



  // useEffect(() => {
    
    

  //   axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses/${coursesid}`)
  //     .then(response => {
  //       setCoursesDetail(response.data);
  //       setLoading(false)
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //       setLoading(false)
  //     });
  // }, [coursesid]);

  // if (loading) {
  //   return <Loading />
  // }


    useEffect(() => {
        async function courseLesson() {
            try {
                const response = await axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses/${coursesid}`);
                setCoursesDetail(response.data);
            } catch (error) {
                console.error(error);
            } finally {
             setLoading(false)
            }
        }
        courseLesson()
    }, [coursesid]);



  return (
    <div>
      <Navbar />

      {loading ? (<Loading/>):(
        <div className="flex h-screen dark:bg-gray-800 font-sans dark:text-slate-900 overflow-hidden relative">

        {/* --- Main Content (Full Width) --- */}
        <main className="flex-1 flex flex-col h-full overflow-hidden relative w-full">

          

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto dark:bg-gray-800 scroll-smooth">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 space-y-6">

              {/* Video Player Container */}
              <div className=" bg-slate-900 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden relative group aspect-video lg:container lg:mx-auto">
                <ReactPlayer url={CoursesVideo(Number(coursesid))} controls width="100%" height="700px" onEnded={videoend}/>
              </div>

              

              {/* Simple Overview Section */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 text-indigo-600">
                  <BookIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
                  <h3 className="text-base sm:text-lg font-bold">รายละเอียดบทเรียน</h3>
                </div>

                <div className="dark:bg-slate-700 p-5 sm:p-8 rounded-2xl shadow-sm  border  transition-all hover:shadow-md">
                  <div className="prose prose-slate prose-sm sm:prose-base max-w-none">
                    <p className="text-2xl sm:text-3xl font-bold dark:text-white mb-4">
                    {coursesDetail?.name}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-3">
                        <h4 className="font-bold dark:text-white text-sm sm:text-base">คุณจะได้เรียนรู้:</h4>
                        <p className='dark:text-white text-lg'>{coursesDetail?.description}</p>
                      </div>

                      <div className="space-y-4 ">
                        <h4 className="font-bold dark:text-white text-sm sm:text-base">เอกสารดาวน์โหลด:</h4>
                        <div className="group dark:bg-slate-700 hover:bg-amber-50 p-4 rounded-xl border  hover:border-amber-200 transition-all flex items-center gap-4 cursor-pointer">
                          <div className="p-2 sm:p-3 bg-white group-hover:bg-amber-100 rounded-lg text-amber-600 shadow-sm transition-colors">
                            <DescriptionIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold dark:text-white text-[10px] sm:text-xs truncate">คู่มือการเรียน.pdf</p>
                            <p className="dark:text-white group-hover:text-amber-700 text-[9px] sm:text-[10px] mt-0.5">PDF • 1.2 MB</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Footer inside Scroll Area */}
              <footer className="pt-8 pb-4 text-center">
                <p className="text-[10px] sm:text-xs text-slate-400">© 2024 Modern Learning Platform. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </main>
      </div>

      )}












      {/* <div className='lg:container lg:mx-auto '>
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
        </div> */}
      <Footer />
    </div>
  )
}

export default Lesson