import './App.css'
import {Route,Routes} from 'react-router-dom';
import Home from './Home/Home';
import DownloadApp from './components/Section/DownloadApp/DownloadApp';
import Footer from './components/Section/Footer/Footer';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <DownloadApp />
    <Footer />
    </>
  )
}

export default App
