import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/profile-card" element={<ProfilePage />} />
            </Routes>
        </div>
    );
}

export default App;