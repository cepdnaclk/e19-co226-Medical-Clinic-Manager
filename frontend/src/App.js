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
import Medications from './components/pages/Medications';
import PatientMedic from './components/pages/PatientMedic';
import Signin from './components/pages/Signin';
import SigninDoc from './components/pages/SigninDoc';
import AppointPatient from './components/pages/AppointPatient';
import AppointmentDoc from './components/pages/AppointmentDoc';
import Signup from './components/pages/Signup';
import RegisterDoc from './components/pages/RegisterDoc';
import MedProfManager from './components/pages/MedProfManager';
import MedicatManager from './components/pages/MedicatManager';
import RegisterManag from './components/pages/RegisterManag';

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleFormSubmit = () => {
    // Perform form submission logic here
    setIsSignedIn(true);
  };
  return (
    <Router>
      <div>
        <Navbar/>

        <Routes>

          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/appoinments' element={<Appoinments/>}></Route>
          <Route exact path='/appointPatient' element={<AppointPatient/>}></Route>
          <Route exact path='/appointmentDoc' element={<AppointmentDoc/>}></Route>
          <Route exact path='/staff' element={<Staff/>}></Route>
          <Route exact path='/managers' element={<Managers/>}></Route>
          <Route exact path='/medprofessionals' element={<MedProfessionals/>}></Route>
          <Route exact path='/medprofManager' element={<MedProfManager/>}></Route>
          <Route exact path='/newAppoinment' element={<NewAppoin/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/registerManag' element={<RegisterManag/>}></Route>
          <Route exact path='/registerDoc' element={<RegisterDoc/>}></Route>
          <Route exact path='/signin' element={<Signin handleFormSubmit={handleFormSubmit}/>}></Route>
          <Route exact path='/signinDoc' element={<SigninDoc/>}></Route>
          <Route exact path='/signup' element={<Signup/>}></Route>
          <Route exact path='/medications' element={<Medications/>}></Route>
          <Route exact path='/medicate' element={<MedicatManager/>}></Route>
          <Route exact path='/medicatManager' element={<MedicatManager/>}></Route>

          </Routes>

        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
