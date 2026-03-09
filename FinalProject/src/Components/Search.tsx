import { useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import axios from "axios";


// type Courses = {
//     id: number;
//     name: string;
//     description: string;
//     category: string;
// }



const Search = () => {

    // const [searchResults, setSearchResults] = useState([]);
    // const [data, setData] = useState([]);
    const [searchicon, setSearchIcon]= useState(false)

    const searchtoggle = () => {
        setSearchIcon(!searchicon)
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setSearchToggle(false)
    // }



    //  useEffect(() => {
    //     axios.get(`https://7d501367-4615-4a19-9b28-489c83cb8582-00-uzzhfldkfse1.sisko.replit.dev/courses`)
    //         .then(response => {
    //             setData(response.data);
                
    //         })
    //         .catch(error => {
    //         console.error('There was an error!', error);
    //         });
    //     }, []);


    // useEffect(()=> {

    //     },[]);


  return (
    <div>
        <div>
            <button onClick={searchtoggle}>
                <SearchIcon className='dark:text-gray-400 '/>
            </button>
        </div>
        
        {searchicon ? (
            <div className=' top-[45%] left-[40%]  w-full'>
                <div className='relative p-4 w-full max-w-md max-h-full'>
                    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        <input type="text" name="" id="" className='w-full pl-8 pr-24 py-3 text-base bg-transparent rounded-lg focus:outline-none'/>
                    </div>
                </div>

            </div>
        ): null}
    </div>
  )
}

export default Search