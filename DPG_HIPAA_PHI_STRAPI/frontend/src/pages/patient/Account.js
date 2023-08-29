import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Account() {
    const [patients, setPatients] = useState("");
    useEffect(() => {
        let token = sessionStorage.getItem('token');
        let host="localhost"
        let port="1337"
        if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
            host=process.env.REACT_APP_BACKEND_IP_ADDRESS
            port=process.env.REACT_APP_BACKEND_PORT
        }

        var header = `${window.atob(sessionStorage.getItem('header'))}`
        var username = header.split(',')[0];

        let url = 'http://'+host+':'+port+'/api/patient-records?filters[name][$eq]='+username
        axios
        .get(url, { headers: {"Authorization" : `Basic ${token}`} })
        .then((res) => {
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
                <div className="content-center">
                    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Contact Number</th>
                                <th scope="col" className="px-6 py-4">Age</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Family Doctor Name</th>
                                <th scope="col" className="px-6 py-4">Family Doctor Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        {
                            Object.entries(rows).map((entry) => {
                            const row = entry[0];
                            const details = entry[1];
                            return(
                                <tr key={row}>
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