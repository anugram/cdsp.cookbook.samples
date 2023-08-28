import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function List() {
    const listHeader = ["Home", "Logout"];

    const [patients, setPatients] = useState("");
    useEffect(() => {
        let token = sessionStorage.getItem('token');
        let host="localhost"
        let port="8080"
        if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
            host=process.env.REACT_APP_BACKEND_IP_ADDRESS
            port=process.env.REACT_APP_BACKEND_PORT
        }

        let url = 'http://'+host+':'+port+'/api/patient-records'
        axios
        .get(url, { headers: {"Authorization" : `Basic ${token}`} })
        .then((res) => {
            console.log(res.data.data);
            setPatients(res.data.data);
        })
        .catch((err) => console.log(err));
    }, []);
    
    const rows = {};
    for (const patient of patients) {
        if (patient.id in rows) {
        rows[patient.id].push(patient);
        } else {
        rows[patient.id] = [patient];
        }
    }

    return(
        <>
        <div className="py-0">
            <div className="container mx-auto">
                <div className="bg-indigo-600 flex flex-row py-2">
                {listHeader.map((item) => {
                    return (
                    <Link to={`/${item}`} key={item}>
                        <div className="px-4">
                        <p className="text-white capitalize">{item}</p>
                        </div>
                    </Link>
                    );
                })}
                </div>
                <div className="content-center">
                    <table className="content-center table-auto divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Contact Number</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Age</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Email</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Family Doctor Name</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Family Doctor Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {
                            Object.entries(rows).map((entry) => {
                            const row = entry[0];
                            const details = entry[1];
                            return(
                                <tr>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{row}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.name}&nbsp;{details[0].attributes.surname}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.contactNumber}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.age}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.familyDoctorName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].attributes.familyDoctorContact}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>                
            </div>
        </div>
        </>
    );
}