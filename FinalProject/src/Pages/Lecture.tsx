import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import CoursesImg from "../Components/CoursesImg"
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar"
import { useEffect, useState } from "react";
import {
    PlayArrow,
    CheckCircle,
    ChevronRight,
    MenuBook,
    AccessTime,
    FileDownload,
    QuestionAnswer,
    InfoOutlined
} from '@mui/icons-material';
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


    <Link to={`/Lesson?course_id=${coursesid}`}>

    </Link>



    return (
        <div>
            <Navbar />

            {loading ? (
                <Loading />
            ) : (<div className="min-h-screen dark:bg-gray-800 font-sans bg-[#f8fafc] text-slate-900">
                {/* Main Content Area */}
                <main className="max-w-7xl mx-auto py-4 md:py-10 px-4 sm:px-6 lg:px-12">

                    <div className="relative mb-8 md:mb-12">
                        <div className="relative aspect-video bg-slate-200 rounded-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden group border border-slate-200">
                            {/* Placeholder Image using a styled div */}

                            <div className="absolute flex flex-col items-center justify-center ">
                                <img className="w-full  object-cover rounded-3xl aspect-video" alt="Card Image" src={CoursesImg(Number(coursesid))} />
                                <p className="text-slate-400 font-medium text-sm md:text-base"></p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <Link to={`/Lesson?course_id=${coursesid}`}>
                                    <button className="group/btn flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl hover:bg-indigo-600 transition-all duration-500 hover:scale-110 active:scale-95">
                                        <div className="w-12 h-12 bg-teal-700 rounded-2xl flex items-center justify-center group-hover/btn:bg-white transition-colors">
                                            <PlayArrow className="text-white group-hover/btn:text-indigo-600 !text-3xl" />
                                        </div>
                                        <div className="text-left">
                                            <p className="dark:text-white font-black text-lg md:text-xl leading-none mb-1">เริ่มเข้าสู่บทเรียน</p>
                                            <p className="text-white/70 text-[10px] md:text-xs font-medium uppercase tracking-widest">Start Learning Now</p>
                                        </div>
                                    </button>
                                </Link>

                            </div>

                            {/* Image Overlay Label */}
                            <div className="absolute top-4 right-4 md:top-8 md:right-10">

                                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-teal-500 text-[10px] md:text-xs font-black uppercase rounded-full shadow-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></div>
                                    Image Content
                                </span>

                            </div>

                            {/* Content Meta Info */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-10 bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/50 shadow-lg max-w-sm">
                                <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                    <span className="px-2 py-0.5 bg-teal-600 text-[9px] md:text-[10px] font-black uppercase rounded tracking-tighter text-teal-200">Feature Image</span>
                                    <span className="text-[10px] md:text-xs text-slate-500 flex items-center gap-1 font-bold">
                                        <AccessTime className="!text-xs md:!text-sm" /> ศึกษาได้ทันที
                                    </span>
                                </div>
                                <p className="text-sm md:text-lg font-bold text-slate-800 leading-tight">ภาพประกอบ: {coursesDetail?.name}</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Layout Grid */}
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">

                        {/* Main Column: Details */}
                        <div className="lg:col-span-8">
                            <div className="flex items-center gap-3 mb-6 md:mb-8">
                                <div className="p-3 bg-indigo-50 rounded-2xl">
                                    <MenuBook className="text-teal-600" />
                                </div>
                                <h2 className="text-xl md:text-3xl font-black dark:text-white tracking-tight">รายละเอียดบทเรียน</h2>
                            </div>

                            <p className="text-base md:text-lg dark:text-white leading-relaxed mb-8">
                                ยินดีต้อนรับเข้าสู่บทเรียน <span className="text-teal-500 font-bold underline decoration-indigo-200 underline-offset-4">{coursesDetail?.name}</span> ในส่วนนี้เราจะพาคุณไปเจาะลึกถึงแก่นความรู้ที่จำเป็น พร้อมกรณีศึกษาที่สามารถนำไปปรับใช้ได้จริงทันที
                            </p>

                            {/* Info Box */}
                            <div className="dark:bg-gray-600 p-6 md:p-8 mb-10 rounded-3xl relative overflow-hidden">
                                <InfoOutlined className="absolute -right-4 -top-4 !text-9xl text-indigo-100/50 rotate-12" />
                                <div className="relative z-10">
                                    <h4 className="text-indigo-400 font-bold mb-3 flex items-center gap-2">
                                        คำแนะนำจากผู้สอน
                                    </h4>
                                    <p className="dark:text-white text-sm md:text-base m-0 italic leading-relaxed">
                                        "การเรียนรู้ที่มีประสิทธิภาพที่สุดคือการลงมือทำ แนะนำให้เตรียมสมุดจดหรือโปรแกรมบันทึกข้อความเพื่อสรุปประเด็นสำคัญระหว่างการรับชมวิดีโอ"
                                    </p>
                                </div>
                            </div>

                            {/* Feature List */}
                            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6">หัวข้อการเรียนรู้:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {[
                                    'แนวคิดพื้นฐานและการใช้งาน',
                                    'การตั้งค่าสภาพแวดล้อมระบบ',
                                    'เวิร์กชอปปฏิบัติจริง Step-by-Step',
                                    'สรุปและแบบทดสอบท้ายบทเรียน'
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <CheckCircle className="text-emerald-500 !text-xl shrink-0" />
                                        <span className="text-slate-700 text-sm font-semibold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Column: Resources */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="dark:bg-gray-600 border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
                                <h4 className="font-black dark:text-white mb-6 uppercase tracking-widest text-xs">เอกสารประกอบ</h4>
                                <div className="space-y-4 ">
                                    {[
                                        { name: 'Lecture_Guide.pdf', size: '1.2 MB', icon: <MenuBook fontSize="small" /> },
                                        { name: 'Practice_File.zip', size: '14.5 MB', icon: <FileDownload fontSize="small" /> }
                                    ].map((file, i) => (
                                        <button key={i} className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-50  hover:bg-teal-600 hover:border-gray-600 transition-all group">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-white rounded-xl shadow-sm group-hover:text-teal-600 transition-colors">
                                                    {file.icon}
                                                </div>
                                                <div className="text-left">
                                                    <p className="text-xs font-bold dark:text-white">{file.name}</p>
                                                    <p className="text-[10px] dark:text-white font-medium">{file.size}</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="!text-slate-300 group-hover:text-teal-600 transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                                    <QuestionAnswer className="!text-7xl" />
                                </div>
                                <h4 className="font-bold text-xl mb-3">พบปัญหา?</h4>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">หากคุณมีคำถามหรือติดขัดในส่วนใด สามารถปรึกษาผู้สอนและเพื่อนร่วมคลาสได้ตลอดเวลา</p>
                                <button className="w-full py-4 bg-white text-slate-900 rounded-2xl text-sm font-black hover:bg-indigo-50 transition-colors shadow-lg active:scale-95">
                                    เข้าร่วม Community
                                </button>
                            </div>
                        </div>
                    </div>



                </main>
            </div>)}













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