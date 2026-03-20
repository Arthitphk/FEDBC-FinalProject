import { useState, useEffect, useMemo } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from "react-router-dom";
type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}



const Search = () => {
    const [courses, setCourses] = useState<Courses[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);




    useEffect(() => {
        async function Allcourse() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses`);
                setCourses(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false)
            }
        }
        Allcourse();
    }, []);

    //  กรองข้อมูล
    const filteredCourse = useMemo(() => {
        if (!searchTerm.trim()) return [];
        return courses.filter(courses =>
            courses.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
    }, [searchTerm, courses])

    const clearSearch = () => setSearchTerm('')





    return (
        <div>
            <div className="w-full max-w-2xl">
                {/* Search Bar Container */}
                <div className="relative group">
                    <div className={`
            flex items-center dark:bg-gray-600 border-2 rounded-2xl  transition-all duration-300
            ${isFocused ? 'border-blue-500 shadow-lg ring-4 ring-blue-50' : 'border-slate-200 shadow-sm'}
            ${error ? 'border-red-300 bg-red-50' : ''}
          `}>
                        <div className="pl-3 flex items-center justify-center text-slate-400">
                            {isLoading ? (
                                <CircularProgress size={22} thickness={5} sx={{ color: '#3b82f6' }} />
                            ) : (
                                <SearchIcon />
                            )}
                        </div>

                        <input
                            type="text"
                            className="w-full p-1 bg-transparent border-none outline-none dark:text-white placeholder:text-slate-400 text-lg"
                            placeholder={isLoading ? "กำลังโหลดข้อมูล..." : "ค้นหาชื่อคอร์ส"}
                            disabled={isLoading || !!error}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                        />

                        {searchTerm && (
                            <button
                                onClick={clearSearch}
                                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors flex items-center justify-center"
                            >
                                <CloseIcon fontSize="small" />
                            </button>
                        )}
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mt-4 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">
                            <ErrorOutlineIcon fontSize="small" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Search Results Dropdown */}
                    {(isFocused && searchTerm.trim() && !isLoading) && (
                        <div className="absolute w-full mt-3 dark:bg-gray-600 border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {filteredCourse.length > 0 ? (
                                <div>
                                    <div className="px-4 py-2 dark:bg-gray-600 border-b border-slate-100">
                                        <span className="text-xs font-semibold dark:text-white uppercase">ผลการค้นหา ({filteredCourse.length})</span>
                                    </div>
                                    <ul className="divide-y divide-slate-100">
                                        {filteredCourse.map((course) => (
                                                <li key={course.id}>
                                                    <Link to={`/Lecture?course_id=${course.id}`}>
                                                    <button className="w-full px-4 py-4 text-left hover:bg-blue-50 transition-colors flex justify-between items-center group/item">
                                                        <div className="flex flex-col">
                                                            <span className="font-medium dark:text-white group-hover/item:text-teal-500 transition-colors">
                                                                {course.name}
                                                            </span>
                                                            <div className="flex items-center gap-3 mt-1">
                                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-500 text-white">
                                                                    {course.category}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <MenuBookIcon className="text-slate-300 group-hover/item:text-teal-600" />
                                                    </button>
                                                    </Link>
                                                    
                                                </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="p-8 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-3 text-slate-400">
                                        <SearchIcon fontSize="large" />
                                    </div>
                                    <p className="text-slate-600 font-medium">ไม่พบคอร์สที่ค้นหา</p>
                                    <p className="text-sm text-slate-400 mt-1">ลองเปลี่ยนคำค้นหาใหม่อีกครั้ง</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Search