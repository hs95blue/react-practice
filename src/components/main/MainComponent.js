import React from 'react';
import logo from '../../assets/images/logo192.png';
import { Link } from 'react-router-dom';

const MainComponent = () => {

    return (
        <div className="main-page">
            <h1>리액트 프로젝트 실습</h1>
            <img src={logo} alt="logo" />
            <ul className="nav-list">
                <li><Link to="/counter">Simple Counter</Link></li>
                <li><Link to="/profile-card">Profile Card</Link></li>
            </ul>
        </div>
    );
};

export default MainComponent;
