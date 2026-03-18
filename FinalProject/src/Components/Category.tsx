import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import CategoryIcon from '@mui/icons-material/Category';








const Category = () => {

  const [category, setCategory] = useState<string[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
       async function Allcategory() {
            try {
                const response = await axios.get<string[]>(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/categories`);
                setCategory(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            } finally {
              // setLoading(false)
            }
        }
        Allcategory()
    }, []);



  return (
    <div>
      <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Course Categories</h2>
      <div className="flex flex-wrap gap-2">
        {category.map((category) => (
          <span 
            key={category} 
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full border border-blue-200"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
    </div>
    // <div className="flex flex-row flex-wrap justify-around gap-5 lg:container lg:mx-auto"> 
    //   {category.map((category: Courses) => (
    //       <div key={category.id}>
    //           <Link to={`/Categories?course_id=${category.id}`}>
    //           <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 dark:bg-gray-700  flex flex-col items-start gap-3 transition-all duration-300 group  rounded-3xl dark:hover:bg-black hover:bg-black">
    //               <CategoryIcon className="dark:text-white hover:text-white"/>
    //               <p className=" text-xl group-hover:text-white dark:text-white ">
    //                 {category?.category}
    //               </p>
    //               <p className="text-gray-400 text-sm">
    //               {category?.name}
    //               </p>
    //           </div>

    //           </Link>
    //       </div>
    //     ))}
    // </div>
    
  )
}

export default Category