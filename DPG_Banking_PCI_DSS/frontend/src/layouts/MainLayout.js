import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function MainLayout() {
    const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
        return (
            <div className="App" id="outer-container">
                <div id="page-wrap"></div>
            </div>
        )
    };

    let authToken = false;
    if(sessionStorage.getItem('token') !== null) {
        console.log(sessionStorage.getItem('token'))
        authToken=true;
    }

    return (
        authToken ? <><CustomNavbar /> <Outlet /></> : <Navigate to="/login"/>
    )
};
export default MainLayout;