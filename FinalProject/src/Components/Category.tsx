import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CategoryIcon from '@mui/icons-material/Category';


type Courses = {
    id: number;
    name: string;
    description: string;
    category: string;
}







const Category = () => {

  const [category, setCategory] = useState<Courses[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`https://f5e54a3d-89aa-494d-bc79-13f3dfeb898e-00-1fgkmlcmh01cz.riker.replit.dev/courses`);
          setCategory(res.data);
        };
        fetchData();
    }, []);



  return (
    <div className="flex flex-row flex-wrap justify-around gap-5 lg:container lg:mx-auto"> 
      {category.map((category: Courses) => (
          <div key={category.id}>
              <Link to={`/Categories?course_id=${category.id}`}>
              <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 dark:bg-gray-700  flex flex-col items-start gap-3 transition-all duration-300 group  rounded-3xl dark:hover:bg-black hover:bg-black">
                  <CategoryIcon className="dark:text-white hover:text-white"/>
                  <p className=" text-xl group-hover:text-white dark:text-white ">
                    {category?.category}
                  </p>
                  <p className="text-gray-400 text-sm">
                  {category?.name}
                  </p>
              </div>

              </Link>
          </div>
        ))}
    </div>
    
  )
}

export default Category