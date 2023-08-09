import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    useEffect(() => {
        sessionStorage.removeItem('token');
    }, []);

    const navigate = useNavigate();
    navigate('/login');

    return(
        <></>
    );
}