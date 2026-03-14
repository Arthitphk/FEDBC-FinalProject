import AllCourses from "../Components/AllCourses"
import Navbar from "../Components/Navbar"
// import Bg from "../Images/codingwall.jpg"
// import Category from "../Components/Category"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"




const Home = () => {

  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AllCourses/>
      <Footer/>
    </div>
  )
}

export default Home