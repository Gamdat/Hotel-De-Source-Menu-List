import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Menu from './Components/Menu';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Gallery from './Pages/Gallery';
import Room from './Components/Room';
import BackToHome from './Components/BackToHome';
import Services from './Components/Services';
import FAQ from './Pages/FAQ';
import BookingForm from './Components/BookingForm';
import './App.css'

function App() {

  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About Us/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path='/services' element={<Services/>} />
       <Route path='/booking' element={<BookingForm/>} />
     <Route path="/contact" element={<Contact/>} />
     <Route path='/rooms' element={<Room/>}/>
     <Route path="/gallery" element={<Gallery/>}/>
     <Route path='/faq' element={<FAQ/>} />
   </Routes>
       <BackToHome/>
   <Footer/>
   </>
  )
}

export default App;
