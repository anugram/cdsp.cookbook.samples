import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React } from 'react';
import Login from './pages/auth/Login';
import MainLayout from './layouts/MainLayout';
import User from './pages/User';
import Register from './pages/auth/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Logout' element={<Login />} />
          <Route exact path="/" element={<MainLayout />}>
            <Route path="" element={<User />} />
            <Route path="Home" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;