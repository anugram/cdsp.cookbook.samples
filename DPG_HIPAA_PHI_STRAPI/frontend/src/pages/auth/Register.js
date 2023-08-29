import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

async function createUser(user) {
    let host="localhost"
    let port="1337"
    if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
        host=process.env.REACT_APP_BACKEND_IP_ADDRESS
        port=process.env.REACT_APP_BACKEND_PORT
    }
    return fetch('http://'+host+':'+port+'/api/auth/local/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(data => data.text())
}
async function createPatient(patient) {
    let host="localhost"
    let port="1337"
    if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
        host=process.env.REACT_APP_BACKEND_IP_ADDRESS
        port=process.env.REACT_APP_BACKEND_PORT
    }
    return fetch('http://'+host+':'+port+'/api/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"data":patient})
    }).then(data => data.text())
}

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();    
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [familyDoctorName, setFamilyDoctorName] = useState();
    const [familyDoctorContact, setFamilyDoctorContact] = useState();
    const [address, setAddress] = useState();
    const [age, setAge] = useState();
    const [ailment, setAilment] = useState();
    const [medicine, setMedicine] = useState();
    const [gender, setGender] = useState();
    const [nextOfKin, setNextOfKin] = useState();
    const [bloodType, setBloodType] = useState();
    const [clinicContact, setClinicContact] = useState();
    const [nextOfKinContact, setNextOfKinContact] = useState();
    const [allergies, setAllergies] = useState();
    const handleSubmit = async e => {
        e.preventDefault();        
        await createUser({
            username,
            password,
            email
        });
        await createPatient({
            name,
            surname,
            username,
            contactNumber,
            email,
            familyDoctorName,
            familyDoctorContact,
            address,
            age,
            ailment,
            medicine,
            gender,
            nextOfKin,
            bloodType,
            clinicContact,
            nextOfKinContact,
            allergies
        });
        navigate('/practitioner'); 
    }

    return(
      <div class="w-full">
        <div class="w-3/4 h-screen place-items-center bg-gray-100">
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-full">
                <h1 className="mt-8 leading-4 text-gray-800 font-bold">Create new Account</h1>
                <h3 className="mt-8 leading-4 text-gray-800 font-bold">Login Details (Optional)</h3>
                <div class="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <h3 className="mt-8 leading-4 text-gray-800 font-bold">Personal Details</h3>
                <div class="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="FirstName" onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="LastName" onChange={e => setSurname(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ContactNumber" onChange={e => setContactNumber(e.target.value)} />
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="number" placeholder="Age" onChange={e => setAge(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="NextOfKinName" onChange={e => setNextOfKin(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="NextOfKinContact" onChange={e => setNextOfKinContact(e.target.value)} />
                    </div>
                </div>                
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <select className='w-full' data-te-select-init onChange={e => setGender(e.target.value)}>
                            <option value="Select">--Select Gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>                        
                    </div>
                    <div>
                        <textarea className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600"  placeholder="Address" onChange={e => setAddress(e.target.value)} />
                    </div>
                </div>
                <h3 className="mt-8 leading-4 text-gray-800 font-bold">Medical Details</h3>
                <div class="grid grid-cols-3 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Family Doctor Name" onChange={e => setFamilyDoctorName(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Family Doctor Contact Number" onChange={e => setFamilyDoctorContact(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Clinic Contact Number" onChange={e => setClinicContact(e.target.value)} />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Blood Type" onChange={e => setBloodType(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Comma separated list of Allergies" onChange={e => setAllergies(e.target.value)} />
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Comma separated list of Ailments" onChange={e => setAilment(e.target.value)} />
                    </div>
                    <div>
                        <input className="border border-gray-300 p-4 w-full rounded text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="Comma separated list of Medicines you are taking" onChange={e => setMedicine(e.target.value)} />
                    </div>
                </div>
                <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full" onClick={handleSubmit}>
                    <div>
                    <p className="text-base leading-4">Create</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
    
    );
}