
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "./Loading";
import CoursesImg from "./CoursesImg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";


type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
    level: string;
}






const MobileDevelopment = () => {

    const [data, setData] = useState<Courses[]>([]);
    const [loading, setLoading] = useState<boolean>(true)


    useEffect(() => {
        async function MobileDevelopment() {
            try {
                const response = await axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/categories/Mobile%20Development/courses`);
                console.log(response.data);

                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false)
            }
        }
        MobileDevelopment();
    }, []);

    return (
        <div>

            <div>
                <div className="mx-auto max-w-7xl mb-12">
                    <header className="mb-12 text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Programming Fundamentals</h1>
                    </header>

                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-5">
                            {data.map((courses: Courses) => (
                                <div key={courses.id}>
                                    <div className="group relative flex flex-col overflow-hidden rounded-2xl dark:bg-gray-700  shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border dark:border-gray-700  ">
                                        <div className="relative h-44 w-full overflow-hidden bg-slate-200">
                                            <img
                                                src={CoursesImg(courses.id)}
                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Content Area */}
                                        <div className="flex flex-1 flex-col p-6">
                                            {/* 1. Category */}
                                            <div className="mb-3 flex items-center justify-between">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                                    {courses.category}
                                                </span>
                                                <div className="flex items-center gap-1.5 text-slate-400">
                                                    <PublishIcon />
                                                    <span className="text-xs font-semibold">{courses.level}</span>
                                                </div>
                                            </div>

                                            {/* 2. Name (Title) */}
                                            <h3 className="mb-2 text-xl font-bold dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
                                                {courses.name}
                                            </h3>

                                            {/* 3. Description */}
                                            <p className="mb-8 text-sm  dark:text-white line-clamp-2 leading-relaxed">
                                                {courses.description}
                                            </p>

                                            {/* Action Area */}
                                            <div className="mt-auto pt-4 border-t border-slate-50">
                                                <Link to={`/Lecture?course_id=${courses.id}`}>
                                                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-blue-600 active:scale-[0.98]">
                                                        รายละเอียดคอร์ส
                                                        <ArrowForwardIosIcon />
                                                    </button>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>)}
                </div>

                {loading && data.length === 0 && (
                    <div className="text-center py-20 dark:text-white">ไม่พบข้อมูลคอร์สเรียนในขณะนี้</div>
                )}

            </div>
        </div>
    )
}

export default MobileDevelopment