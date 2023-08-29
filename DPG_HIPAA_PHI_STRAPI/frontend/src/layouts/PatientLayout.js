import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";

function PatientLayout() {
    const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
        return (
            <div className="App" id="outer-container">
                <div id="page-wrap">
                    <div className="bg-indigo-600 flex flex-row py-2">
                    <Link to="/user">
                        <div className="px-4">
                            <p className="text-white capitalize">My Account</p>
                        </div>
                    </Link>
                    <Link to="/logout">
                        <div className="px-4">
                            <p className="text-white capitalize">Logout</p>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        )
    };

    let authToken = false;
    if(sessionStorage.getItem('token') !== null) {
        authToken=true;
    }

    return (
        authToken ? <><CustomNavbar /> <Outlet /></> : <Navigate to="/login"/>
    )
};
export default PatientLayout;