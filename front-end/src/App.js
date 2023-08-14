import React from 'react';
import HomeManager from './components/pages/Dashboards/home/HomeManager';
import HomeMedProf from './components/pages/Dashboards/home/HomeMedProf';
import HomePatient from './components/pages/Dashboards/home/HomePatient';
import Signin from './components/pages/signin/Signin';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RegisterUser from './components/pages/profileDetailForms/RegisterUser';
import RegisterMedProf from './components/pages/profileDetailForms/RegisterMedProf';
import RegisterManager from './components/pages/profileDetailForms/RegisterManager';
import UserSignup from './components/pages/SignUp/UserSignup';
import ModeratorSignUp from './components/pages/SignUp/ModeratorSignUp';
import AdminSignup from './components/pages/SignUp/AdminSignup';
import Root from './components/pages/Dashboards/root/Root';
import AppointPatient from './components/pages/Dashboards/appos/AppointPatient';
import AppointmentManager from './components/pages/Dashboards/appos/AppointmentManager';
import AppointmentMedProf from './components/pages/Dashboards/appos/AppointmentMedProf';
import NewAppoin from './components/pages/Dashboards/appos/NewAppoin';
import NoAppoinsManager from './components/pages/Dashboards/appos/NoAppoinsManager';
import NoAppoinsMedProf from './components/pages/Dashboards/appos/NoAppoinsMedProf';
import AppointmentMedProfPatient from './components/pages/Dashboards/appos/AppointmentMedProfPatient';
import Managers from './components/pages/Dashboards/managers/Managers';
import MedProfManager from './components/pages/Dashboards/medprofs/MedProfManager';
import MedProfessionals from './components/pages/Dashboards/medprofs/MedProfessionals';
import Patient from './components/pages/Dashboards/patients/Patients';
import MyPatients from './components/pages/Dashboards/patients/MyPatients';
import MedProfMedications from './components/pages/Dashboards/medications/MedProfMedications';
import NewMedication from './components/pages/Dashboards/medications/NewMedication';
import MedicationMedProfPatientAppointment from './components/pages/Dashboards/medications/MedicationMedProfPatientAppointment';
import PatientAppointmentMedications from './components/pages/Dashboards/medications/PatientAppointmentMedications';

import SessionStorageTest from './components/SessionStorageTest';
import ChangeUserNameEmailPassword from './components/pages/Dashboards/change_username_pswd/ChangeUserNameEmailPassword';




function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  const handleFormSubmit = () => {
    // Perform form submission logic here
    setIsSignedIn(true);
  };

  return (
    <Router>
      <div>

        <Routes>
          <Route exact path='/' element={<Root/>}></Route>
          <Route exact path='/signin' element={<Signin handleFormSubmit={handleFormSubmit}/>}></Route> // signin
          <Route exact path='/user/signup' element={<UserSignup/>}></Route> // user signup
          <Route exact path='/moderator/signup' element={<ModeratorSignUp/>}></Route> // mod signup
          <Route exact path='/admin/signup' element={<AdminSignup/>}></Route> // admin signup
          <Route exact path='/manager/home' element={<HomeManager/>}></Route>
          <Route exact path='/medprof/home' element={<HomeMedProf/>}></Route>
          <Route exact path='/patient/home' element={<HomePatient/>}></Route>
          <Route exact path='/patient/register' element={<RegisterUser/>}></Route> // need more details from user
          <Route exact path='/medprof/register' element={<RegisterMedProf/>}></Route> // need more details from user
          <Route exact path='/manager/register' element={<RegisterManager/>}></Route> // need more details from user
          <Route exact path='/patient/appointments' element={<AppointPatient/>}></Route> // patient's appointments
          <Route exact path='/patient/new_appointment' element={<NewAppoin/>}></Route> // new appointment
          <Route exact path='/medprof/appointments' element={<AppointmentMedProf/>}></Route> // medprof's appointments
          <Route exact path='/medprof/no_appointments' element={<NoAppoinsMedProf/>}></Route>
          <Route exact path='/manager/appointments' element={<AppointmentManager/>}></Route> // manager's appointments
          <Route exact path='/manager/no_appointments' element={<NoAppoinsManager/>}></Route> // manager's appointments
          <Route exact path='/managers/all' element={<Managers/>}></Route> // all managers
          <Route exact path='/manager/medprofs/all' element={<MedProfManager/>}></Route> // all medprofs manager view
          <Route exact path='/medprofs/all' element={<MedProfessionals/>}></Route> // all medprofs
          <Route exact path='/patients' element={<Patient/>}></Route>
          <Route exact path='/medprof/my_patients' element={<MyPatients/>}></Route>
          <Route exact path='/medprof/my_patients/appos' element={<AppointmentMedProfPatient/>}></Route>
          <Route exact path='/medprof/medications' element={<MedProfMedications/>}></Route>
          <Route exact path='/patient/appointment/medications' element={<PatientAppointmentMedications/>}></Route>
          <Route exact path='/medprof/my_patients/appointment/medications' element={<MedicationMedProfPatientAppointment/>}></Route>
          <Route exact path='/medprof/new_medication' element={<NewMedication/>}></Route>
          <Route exact path='/change_username_email_password' element={<ChangeUserNameEmailPassword/>}></Route>
          

          <Route exact path='/test' element={<SessionStorageTest/>}></Route>
          

          {/* <Route exact path='/appointments' element={<Appoinments/>}></Route> // all appointments
          
          <Route exact path='/appointmentDoc' element={<AppointmentDoc/>}></Route> // doctor view of appointments
          <Route exact path='/managers' element={<Managers/>}></Route> // all managers
          <Route exact path='/medprofessionals' element={<MedProfessionals/>}></Route> // all medprofs
          <Route exact path='/medprofManager' element={<MedProfManager/>}></Route> // all med profs managers view
          <Route exact path='/newAppoinment' element={<NewAppoin/>}></Route> // new appoinment
          <Route exact path='/register' element={<Register/>}></Route> // need more details from user
          <Route exact path='/registerManag' element={<RegisterManag/>}></Route> // need more details from manager
          <Route exact path='/registerDoc' element={<RegisterDoc/>}></Route> // need more details from medprof
          
          
          <Route exact path='/medications' element={<Medications/>}></Route> // all medications
          <Route exact path='/medicate' element={<MedicatManager/>}></Route> // doctor view of medications 
          <Route exact path='/medicatManager' element={<MedicatManager/>}></Route> */}

          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
