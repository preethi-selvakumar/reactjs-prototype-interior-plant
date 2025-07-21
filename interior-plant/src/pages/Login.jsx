import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import LoginLeftComponent from '../components/LoginLeftComponent';
import LoginRightComponent from '../components/LoginRightComponent';

const Login = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="login-wrapper">
            <div className="bg-overlay" />

            <button className="close-button" onClick={handleClose}>
                <IoClose />
            </button>

            <div className="login-content">
                <LoginLeftComponent />
                <LoginRightComponent />
            </div>
        </div>
    );
};

export default Login;
