import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";


type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}





const AllCourses = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        async function Allcourse() {
            try {
                const response = await axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses`);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        Allcourse();
    }, []);



    return (

        <div>
            <div className="mx-auto max-w-7xl">
                <header className="mb-12 text-center md:text-left">
                    <h2 className="text-blue-600 font-bold tracking-tight mb-2 uppercase text-sm">Exploration</h2>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">คอร์สเรียนทั้งหมด</h1>
                </header>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {data.map((courses: Courses) => (
                        <CourseCard key={courses.id} courses={courses} />
                    ))}
                </div>
            </div>

        </div>      
    )
}

export default AllCourses

