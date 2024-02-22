import AllCourses from "../Components/AllCourses"
import Navbar from "../Components/Navbar"
import Bg from "../Images/codingwall.jpg"
import Category from "../Components/Category"
import Heading from "../Components/Heading"
import Footer from "../Components/Footer"

const features = [
  { name: 'Python'},
  { name: 'Javascript'},
  { name: 'TensorFlow'},
  { name: 'Data Science with R'}
]

const Hero = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center"
}






const Home = () => {

  
  return (
    <div>
      <Navbar/>
      <div className=" w-full p-20 h-96" style={Hero}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-yellow-600">Online Education</h1>
          <div className="mt-4">
            <button className="px-6 py-2 text-center text-white bg-indigo-600 rounded-md shadow-md">
              Get started
            </button>
          </div>
        </div>
      </div>
      <AllCourses/>
      <div className="dark:bg-gray-700 bg-neutral-200">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">What will you learn to Programing</h2>
          <p className="mt-4 dark:text-white">
          Programming knowledge doesn't just benefit those who work in computer science or related fields. For example, people who work in marketing, design, 
          sales and customer relations for technology products can use programming training to enhance their skill sets. 
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t dark:border-gray-200 border-gray-900 pt-4">
                <dt className="font-medium dark:text-white">{feature.name}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="src\Images\Python-icon.png"
            className="rounded-lg size-60"
          />
          <img
            src="src\Images\javascript-icon.png"
            className="rounded-lg size-60"
          />
          <img
            src="src\Images\tensorflow-icon.png"
            className="rounded-lg size-60"
          />
          <img
            src="src\Images\data-science-with-r-icon.png"
            className="rounded-lg size-60"
          />
        </div>
      </div>
    </div>
      <Heading title="Category"/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home