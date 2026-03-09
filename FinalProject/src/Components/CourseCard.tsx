import CoursesImg from "./CoursesImg"
import { Link } from "react-router-dom";


const CourseCard = ({courses}) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl dark:bg-gray-700  shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border dark:border-gray-700 ">
      <div className="relative h-44 w-full overflow-hidden bg-slate-200">
        <img 
          src={CoursesImg(courses.id)}
          alt={courses.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        {/* 1. Category */}
        <div className="mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {courses.category}
          </span>
        </div>

        {/* 2. Name (Title) */}
        <h3 className="mb-2 text-xl font-bold dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
          {courses.title}
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
          </button>                          
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default CourseCard