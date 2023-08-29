import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import Register from './pages/auth/Register';
import PatientLayout from './layouts/PatientLayout';
import PractitionerLayout from './layouts/PractitionerLayout';
import ListPatients from './pages/practitioner/ListPatients';
import AddPatient from './pages/practitioner/AddPatient';
import Account from './pages/patient/Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route exact path="/user" element={<PatientLayout />}>
            <Route path="" element={<Account />} />
          </Route>
          <Route exact path="/practitioner" element={<PractitionerLayout />}>
            <Route path="" element={<ListPatients />} />
            <Route path="create" element={<AddPatient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
