import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto space-y-4 lg:flex-row lg:items-center lg:space-x-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center">Welcome to Saad Beidouri's portfolio</h1>
            <img src="/images/Miyamoto.png" alt="" className="w-full md:w-3/4 lg:w-1/2 xl:w-2/3 h-auto max-w-screen-lg" />
        </div>
    );
}

export default HomePage;
