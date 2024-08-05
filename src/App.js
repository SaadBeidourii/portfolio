import React from 'react';
import NavBar from './components/navbar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Card from "./components/cards/Card";
import projects from './data/projects';
import { educationItems, professionalItems } from "./data/timeline";
import TimelineItem from "./components/timeline/Timeline";

const App = () => {
    return (
        <div className="font-regikan text-white min-h-screen flex flex-col mx-3 md:mx-6">
            <NavBar />
            <div className="px-4 flex-grow space-y-6">
                <div className="rounded-lg p-6 border border-[#00df9a]">
                    <div className="mb-12">
                        <HomePage />
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
            <div className="text-red-600 text-2xl md:text-3xl m-3 text-center">
                <h1>This page is currently under development</h1>
            </div>
        </div>
    );
}

export default App;
