import React from 'react';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/HomePage/HomePage';

const App = () => {
    return (
        <div className="font-regikan text-white">
            <NavBar />
            <div className="mb-30">
                <HomePage />
            </div>
            <div className="absolute bottom-4 right-4 text-3xl text-red-600">
                <h1>This page is currently under development</h1>
            </div>
        </div>
    );
}

export default App;
