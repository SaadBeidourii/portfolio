import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div className="ml-10 mt-10 justify-center items-baseline">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#00df9a]">Saad Beidouri</h1>
                <h2 className="text-lg md:text-xl lg:text-2xl ml-4 text-gray-400">Computer Engineering Student</h2>
            </div>
            <div className="text-justify max-w-[70%] mx-auto mt-10 text-xl">
                <p>
                    Hello, I am Saad Beidouri, a dedicated computer engineering student currently in my fourth year at
                    <a href="https://polytech.univ-cotedazur.fr/" className="font-medium text-[#00df9a] dark:text-bg-[#00df9a] hover:no-underline hover:bg-[#00df9a] hover:bg- hover:text-black"> Polytech
                        Nice Sophia </a>
                    in France. My academic journey began with a rigorous foundation in mathematics and computer science
                    during my preparatory studies in Saint-Brieuc, France. After completing two years in classes
                    préparatoires aux grandes écoles (CPGE) in Saint-Brieuc, I transitioned to Polytech Nice Sophia to
                    further develop my skills.
                </p>

            </div>
        </div>
    );
}

export default HomePage;
