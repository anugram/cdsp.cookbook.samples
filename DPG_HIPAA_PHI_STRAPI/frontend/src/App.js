import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout';
import PatientLayout from './layouts/PatientLayout';
import List from './pages/patient/List';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/login' element={<Logout />} />
          <Route exact path="/" element={<PatientLayout />}>
            <Route path="" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
