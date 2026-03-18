import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import CoursesImg from "../Components/CoursesImg"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import {

    BookOutlined,


    ChatBubbleOutline,
    ShareOutlined,
    AccountCircle,
    PlayArrow
} from '@mui/icons-material';
import Images from '../Images/Bing.png'
import { Loading } from '../Components/Loading'



// const people = [
//     {
//         name: 'John Bing Xina ',
//         role: 'CEO, Programmer',
//         imageUrl: { Images },
//     }
// ]


type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}


const Lecture = () => {
    const [searchParams] = useSearchParams()
    const coursesid = searchParams.get('course_id')
    const [coursesDetail, setCoursesDetail] = useState<Courses | null>(null);
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses${coursesid}`)
            .then(response => {
                setCoursesDetail(response.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('There was an error!', error);
                setLoading(false)
            });
    }, [coursesid]);




    if (loading) {
        return <Loading />
    }





    return (
        <div>
            <Navbar />

            <div className="flex flex-col h-screen dark:bg-white text-slate-900 font-sans overflow-hidden">
                <div className="flex flex-1 overflow-hidden relative">
                    <main className="flex-1 overflow-y-auto dark:bg-gray-800">
                        {/* ส่วนแสดงวิดีโอ (เปลี่ยนกลับจากภาพ) */}
                        <div className="bg-slate-900 w-full sticky top-0 z-30">
                            <div className="max-w-5xl mx-auto">
                                <div className="relative aspect-video w-full overflow-hidden group shadow-2xl">
                                    {/* วิดีโอ Thumbnail */}
                                    <img className="w-full  object-cover rounded-3xl" alt="Card Image" src={CoursesImg(Number(coursesid))} />

                                    {/* Progress Bar หลอก */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                                        <div className="h-full bg-indigo-500 w-1/3 shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ส่วนเนื้อหาและรายการบทเรียน */}
                        <div className="  max-w-6xl mx-auto px-4 md:px-8 py-8 dark:bg-gray-700 rounded-3xl">
                            <div className="mb-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-bold bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded uppercase tracking-wider">บทเรียนปัจจุบัน</span>
                                    
                                </div>
                                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                                    {coursesDetail?.name}
                                </h1>
                            </div>

                            <div className="grid lg:grid-cols-12 gap-10">
                                {/* คอลัมน์ซ้าย: รายการบทเรียนในคอร์ส */}
                                <div className="lg:col-span-4 space-y-6">
                                    <div className="dark:bg-gray-500 border border-slate-500 rounded-3xl overflow-hidden shadow-sm">
                                        <div className="p-5 border-b border-slate-200/60 dark:bg-gray-500">
                                            <h2 className="font-bold dark:text-white flex items-center gap-2">
                                                <BookOutlined sx={{ fontSize: 20, color: '#4f46e5' }} />
                                                เนื้อหาบทเรียน
                                            </h2>
                                            <p className="text-[10px] dark:text-white mt-1 uppercase font-bold tracking-widest">
                                                บทเรียน
                                            </p>
                                        </div>

                                        <div className="p-2 space-y-1 ">
                                            <Link to={`/Lesson?course_id=${coursesid}`}>
                                                <button className=" dark:text-white text-xl  font-bold p-2 cursor-pointer   hover:underline text-wrap">
                                                   เข้าเรียนตรงนี้
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>

                                {/* คอลัมน์ขวา: รายละเอียดบทเรียน */}
                                <div className="lg:col-span-8 space-y-8">
                                    <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 border border-slate-200 shadow-sm overflow-hidden">
                                            <AccountCircle sx={{ fontSize: 40, color: '#cbd5e1' }} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase">ผู้สอน</p>
                                            <p className="text-sm font-bold dark:text-white">อาจารย์สมชาย สายดีไซน์</p>
                                        </div>
                                    </div>

                                    <div className="prose prose-slate max-w-none">
                                        <h3 className="text-xl font-bold mb-4 dark:text-white">รายละเอียดบทเรียน</h3>
                                        <p className="text-slate-600 leading-relaxed text-lg mb-8">

                                        </p>

                                        <div className="p-6 rounded-3xl dark:bg-gray-500 ">
                                            <div className="flex items-start gap-4">
                                                <div className="bg-white p-2.5 rounded-xl text-indigo-600 shadow-sm flex items-center justify-center">
                                                    <ChatBubbleOutline sx={{ fontSize: 20 }} />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold dark:text-white mb-1">หมายเหตุจากผู้สอน</h4>
                                                    <p className="dark:text-white text-sm leading-relaxed">
                                                        อย่าลืมดาวน์โหลด UI Kit ด้านข้างเพื่อใช้ประกอบการทำ Workshop ในครึ่งหลังของวิดีโอนะครับ หากติดปัญหาตรงไหนสามารถสอบถามได้ในเว็บบอร์ดครับ
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                                        <button className="flex items-center gap-2 py-3 px-6 rounded-2xl border border-slate-200 text-sm font-bold dark:text-white hover:bg-gray-500 transition-all">
                                            <ChatBubbleOutline sx={{ fontSize: 18 }} />
                                            เว็บบอร์ดถาม-ตอบ
                                        </button>
                                        <button className="flex items-center gap-2 py-3 px-6 rounded-2xl border border-slate-200 text-sm font-bold dark:text-white hover:bg-gray-500 transition-all">
                                            <ShareOutlined sx={{ fontSize: 18 }} />
                                            แชร์บทเรียน
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>



















            {/* <div className='container mx-auto mt-10'>
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
           
            
        </div> */}
            <Footer />
        </div>
    )
}

export default Lecture