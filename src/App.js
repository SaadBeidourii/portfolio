import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Projects from './pages/Projects';
import HomePage from "./pages/HomePage";


const App = () => {
    return (
        <div className="font-regikan text-white min-h-screen flex flex-col mx-3 md:mx-6">
            <title>Saad Beidouri</title>
            <NavBar />
            <div className="px-4 flex-grow space-y-6">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
