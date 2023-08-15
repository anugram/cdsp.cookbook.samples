import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

async function createAccount(account) {
    let token = sessionStorage.getItem('token');
    let host="localhost"
    let port=8080
    if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
        host=process.env.REACT_APP_BACKEND_IP_ADDRESS
        port=process.env.REACT_APP_BACKEND_PORT
    }
    return fetch('http://'+host+':'+port+'/api/accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : `Basic ${token}`
        },
        body: JSON.stringify(account)
    }).then(data => data.text())
}

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [ssn, setSsn] = useState();
  const [cvv, setCvv] = useState();
  const [cardNum, setCardNum] = useState();
  const [cardExpiryDate, setCardExpiryDate] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    
    await createAccount({
      username,
      password,
      firstName,
      lastName,
      contactNumber,
      ssn,
      cvv,
      cardNum,
      cardExpiryDate
    });
    sessionStorage.removeItem('token');
    navigate('/Home'); 
  }

  return(
    <div class="flex mb-4">
      <div class="w-1/4 h-full bg-gray-100"></div>
      <div class="w-1/2 h-full bg-gray-100">

        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-full">
            <h1 className="mt-8 leading-4 text-gray-800">Create Account</h1>
            <h3 className="mt-8 leading-4 text-gray-800">Login Details</h3>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <h3 className="mt-8 leading-4 text-gray-800">Personal Details</h3>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="FirstName" onChange={e => setFirstName(e.target.value)} />
                </div>
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="LastName" onChange={e => setLastName(e.target.value)} />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ContactNumber" onChange={e => setContactNumber(e.target.value)} />
                </div>
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="SSN" onChange={e => setSsn(e.target.value)} />
                </div>
            </div>
            <h3 className="mt-8 leading-4 text-gray-800">Card Details</h3>
            <div class="grid grid-cols-3 gap-4 mt-4">
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Credit Card Number" onChange={e => setCardNum(e.target.value)} />
                </div>
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="CVV" onChange={e => setCvv(e.target.value)} />
                </div>
                <div>
                    <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="date" onChange={e => setCardExpiryDate(e.target.value)} />
                </div>
            </div>
            <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full" onClick={handleSubmit}>
              <div>
                <p className="text-base leading-4">Register</p>
              </div>
            </button>
            <label className="mt-8 text-base leading-4 text-gray-800">Already Registered? <a href="/login">Login here</a>.</label>
        </div>

      </div>
      <div class="w-1/4 h-full bg-gray-100"></div>
    </div>
  
  )
}