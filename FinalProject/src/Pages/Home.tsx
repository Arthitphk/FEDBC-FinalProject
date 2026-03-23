import AllCourses from "../Components/AllCourses"
import Navbar from "../Components/Navbar"
// import Bg from "../Images/codingwall.jpg"
// import Category from "../Components/Category"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import ProgrammingFundamentals from "../Components/ProgrammingFundamentals"
import WebDevelopment from "../Components/WebDevelopment"
import MachineLearning from "../Components/MachineLearning"
import DataScience from "../Components/DataScience"
import MobileDevelopment from "../Components/MobileDevelopment"
import WebDesign from "../Components/WebDesign"
// import Category from "../Components/Category"


const Home = () => {

  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AllCourses/> 
      <ProgrammingFundamentals/>
      <WebDevelopment/>
      <MachineLearning/>
      <DataScience/>
      <MobileDevelopment/>
      <WebDesign/>
      <Footer/>
    </div>
  )
}

export default Home