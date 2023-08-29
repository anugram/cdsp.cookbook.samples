import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function loginUser(credentials) {
  let host="localhost"
  let port="1337"
  if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
      host=process.env.REACT_APP_BACKEND_IP_ADDRESS
      port=process.env.REACT_APP_BACKEND_PORT
  }
  return fetch('http://'+host+':'+port+'/api/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function Login() {
  const showToastMessage = () => {
    toast.error('Invalid username or password', {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    
    const auth_response = await loginUser({
      identifier,
      password
    });
    
    var header = `${window.btoa(identifier + ':test')}`

    sessionStorage.setItem('header', header);
    sessionStorage.setItem('token', auth_response.jwt);
    var token = auth_response.jwt;
    if(token !== null && token !== undefined) {
        if(identifier === "nurse") {
            navigate("/practitioner");
        } else {
            navigate('/user'); 
        }
    } else {
        showToastMessage()
    }
  }

  return(
    <div className="flex mb-4">
      <div className="w-1/4 h-full bg-gray-100"></div>
        <div className="w-1/2 h-full bg-gray-100">
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-full">
                <label className="mt-8 text-base leading-4 text-gray-800">Login Credentials</label>
                <div className="mt-8">
                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Identifier" onChange={e => setIdentifier(e.target.value)} />
                </div>
                <div className="mt-8">
                <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full" onClick={handleSubmit}>
                <div>
                    <p className="text-base leading-4">Login</p>
                </div>
                </button>
                <label className="mt-8 text-base leading-4 text-gray-800">Not Registered? <a href="/register">Register new account</a>.</label>
            </div>
        </div>
      <div className="w-1/4 h-full bg-gray-100"><ToastContainer /></div>
    </div>
  
  )
}