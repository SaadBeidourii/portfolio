import React from 'react';
import projects from '../data/projects';
import { educationItems, professionalItems } from '../data/timeline';
import Card from '../components/cards/Card';
import TimelineItem from '../components/timeline/Timeline';

const HomePage = () => {
    return (
        <div className="px-4 flex-grow space-y-6 p-2">
            <div className="rounded-lg p-6 border border-[#00df9a]">
                <div className="mb-12">
                    <div className="ml-10 mt-10 justify-center items-baseline">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#00df9a]">Saad Beidouri</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl ml-4 text-gray-400">
                            Computer Engineering Student
                        </h2>
                    </div>
                    <div className="text-justify max-w-[70%] mx-auto mt-10 text-xl">
                        <p>
                            Hello, I am Saad Beidouri, a dedicated computer engineering student currently in my fourth year at <a
                                href="https://polytech.univ-cotedazur.fr/"
                                className="font-medium text-[#00df9a] dark:text-bg-[#00df9a] hover:no-underline hover:bg-[#00df9a] hover:bg- hover:text-black"
                            >
                                 Polytech Nice Sophia </a>
                             in France. My academic journey began with a rigorous foundation in mathematics and computer science
                            during my preparatory studies in Saint-Brieuc, France. After completing two years in classes
                            préparatoires aux grandes écoles (CPGE) in Saint-Brieuc, I transitioned to Polytech Nice Sophia to
                            further develop my skills.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                <div className="rounded-lg p-6 border border-[#00df9a] flex-grow">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Projects</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                            />
                        ))}
                    </div>
                </div>

                <div className="rounded-lg p-6 border border-[#00df9a] flex-grow">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">TimeLine</h2>
                    <div className="max-w-3xl mx-auto p-3">
                        <ol className="relative space-y-6">
                            <div className="rounded-lg p-6 border border-[#00df9a]">
                                {professionalItems.map((item, index) => (
                                    <TimelineItem
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        date={item.date}
                                        description={item.description}
                                        tag={item.tag}
                                    />
                                ))}
                            </div>
                            <div className="rounded-lg p-6 border border-[#00df9a]">
                                {educationItems.map((item, index) => (
                                    <TimelineItem
                                        key={index}
                                        icon={item.icon}
                                        title={item.title}
                                        date={item.date}
                                        description={item.description}
                                        tag={item.tag}
                                    />
                                ))}
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
