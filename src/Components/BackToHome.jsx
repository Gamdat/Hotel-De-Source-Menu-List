import React from "react";
import {useLocation, useNavigate } from 'react-router-dom';
import './BackToHome.css';

const BackToHome = () => {
    const location =useLocation();
    const navigate = useNavigate();

    if (location.pathname === "/") return null;

    return(
        <div className="back-to-home">
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    )
}

export default BackToHome;