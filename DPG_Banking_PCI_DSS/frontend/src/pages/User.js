import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function User() {
    const listHeader = ["Home"];

    const [accounts, setAccounts] = useState("");
    useEffect(() => {
        let token = sessionStorage.getItem('token');
        let host = "localhost";
        if (process.env.REACT_APP_BACKEND_IP_ADDRESS !== undefined) {
            host=process.env.REACT_APP_BACKEND_IP_ADDRESS
        }

        let url = 'http://'+host+':8080/api/accounts'
        axios
        .get(url, { headers: {"Authorization" : `Basic ${token}`} })
        .then((res) => {
            console.log(res.data);
            setAccounts(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
    
    const rows = {};
    for (const account of accounts) {
        if (account.id in rows) {
        rows[account.id].push(account);
        } else {
        rows[account.id] = [account];
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
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">UserName</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Full Name</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Credit Card Number</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">CVV</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Expiry</th>
                                <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">SSN</th>
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
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].username}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].firstName}&nbsp;{details[0].lastName}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].cardNum}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].cvv}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].expiryDate}</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{details[0].ssn}</td>
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