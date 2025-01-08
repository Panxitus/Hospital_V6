import { BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Doctores from './pages/doctores/Doctores'
import Gallery from './pages/gallery/Gallery'
import Navbar from './components/navbar'
function App() {
   
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Doctores/>
      <Gallery/>
    </BrowserRouter>
  )
}
export default App
