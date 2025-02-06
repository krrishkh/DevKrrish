import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Technologies from './components/Technologies/Technologies'
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='overflow-x-hidden '>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        </div>
      
      </div>
      <div className='container'>
        <Navbar/>
        <Home/>
        <About/>
        <Technologies/>
        <Projects/>
        <Contact/>

      </div>
    
    </div>
  )
}

export default App
