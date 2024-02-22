import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Lecture  from './Pages/Lecture'
import Lesson  from './Pages/Lesson'
import Categories from './Pages/Categories'

function App() {
  return (
   <Routes>
      <Route path='/Home' element={<Home/>}/> 
      <Route path='/Lecture' element={<Lecture/>}/> 
      <Route path='/Lesson' element={<Lesson/>}/>
      <Route path='/Categories' element={<Categories/>}/>  
   </Routes>
  )
}


function WrappedApp() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )
}

export default WrappedApp
