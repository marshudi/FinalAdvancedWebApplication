import logo from './logo.svg';
import './App.css';




import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Display from './Components/Display';
import Footer from './Components/Footer';



function App() {
  return (
      <>
      <BrowserRouter>
          <div className='header'>
            <nav className='nav nav-bar bg-info justify-content-center'>
              <ul className='nav nav-tabs'>
                <li className='nav-items'><Link className='nav-link' to="/home"><h3 style={{color:"purple"}}>Home</h3></Link></li>
                <li className='nav-items'><Link className='nav-link' to="/register"><h3 style={{color:"purple"}}>Register</h3></Link></li>
                <li className='nav-items'><Link className='nav-link' to="/display"><h3 style={{color:"purple"}}>Display</h3></Link></li>
              </ul>
            </nav>
          </div>
          
          <div className='container'>
            <Routes>
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/display' element={<Display/>}></Route>

            </Routes>

          </div>
      
      
          <div className='footer'>

            <Footer/>
          </div>
      
      
      
      
      
      </BrowserRouter>

      
      </>
  );
}

export default App;
