import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('header');
        navigate('/login');
    }, [navigate]);    

    return(
        <></>
    );
}