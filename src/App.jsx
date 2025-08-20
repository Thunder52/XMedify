import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import DownloadApp from './components/Section/DownloadApp/DownloadApp';
import Footer from './components/Section/Footer/Footer';
import Search from './Search/Search';
import MyBooking from './MyBooking/MyBooking';
import FAQ from './components/Section/FAQ/FAQ'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/search' element={<Search />}/>
      <Route path='/my-bookings' element={<MyBooking />}/>
    </Routes>
    <FAQ />
    <DownloadApp />
    <Footer />
    </>
  )
}

export default App
