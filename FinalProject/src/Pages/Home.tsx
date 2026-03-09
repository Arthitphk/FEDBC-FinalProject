import AllCourses from "../Components/AllCourses"
import Navbar from "../Components/Navbar"
// import Bg from "../Images/codingwall.jpg"
import Category from "../Components/Category"
import Heading from "../Components/Heading"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"




const Home = () => {

  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AllCourses/>
      <Heading title="Category"/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home