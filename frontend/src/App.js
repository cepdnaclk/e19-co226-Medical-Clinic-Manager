import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import Appoinments from './components/pages/Appoinments';
import Staff from './components/pages/Staff';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Managers from './components/pages/Managers';
import MedProfessionals from './components/pages/MedProfessionals';
import Footer from './components/inc/Footer';
import NewAppoin from './components/pages/NewAppoin';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        <Routes>

          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/appoinments' element={<Appoinments/>}></Route>
          <Route exact path='/staff' element={<Staff/>}></Route>
          <Route exact path='/managers' element={<Managers/>}></Route>
          <Route exact path='/medprofessionals' element={<MedProfessionals/>}></Route>
          <Route exact path='/newAppoinment' element={<NewAppoin/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>

        </Routes>

        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
