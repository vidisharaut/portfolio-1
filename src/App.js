import './App.css';

import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Footer from './components/Footer';



function App() {
  return (
    <div>
       {/* <RouterProvider router={router}/> */}
       <NavBar/>
       <div className='App'>
        <Home/>
       </div>
       <About/>
       <Projects/>
       <Footer/>
    </div>
  );
}

export default App;
