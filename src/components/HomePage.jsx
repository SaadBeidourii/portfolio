import sortedProjects from "../data/projects"
import { educationItems, professionalItems } from "../data/timeline"
import Card from "./cards/Card"
import TimelineItem from "./timeline/Timeline"
import Techno from "./techno/techno"
import { Github, Download, Mail, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const HomePage = () => {
    return (
        <motion.div
            className="container mx-auto px-4 py-16 max-w-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="mb-[10px]">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2a6a55]/10 to-emerald-400/10"></div>
                        <div className="relative z-10 px-6 py-12 md:px-12 md:py-20">
                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                                        Saad Beidouri
                                    </h1>
                                    <h2 className="text-xl md:text-2xl mt-2 text-[#2a6a55] font-medium">Full Stack Engineer</h2>
                                </motion.div>

                                <motion.div
                                    className="mt-8 prose prose-lg dark:prose-invert max-w-none"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Hello, I am Saad Beidouri, a dedicated computer engineering student currently in my fifth year at{" "}
                                        <a
                                            href="https://polytech.univ-cotedazur.fr/"
                                            className="text-[#2a6a55] font-medium hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Polytech Nice Sophia
                                        </a>{" "}
                                        in France. My academic journey began with a rigorous foundation in mathematics and computer science
                                        during my preparatory studies in Saint-Brieuc, France. After completing two years in classes
                                        préparatoires aux grandes écoles (CPGE) in Saint-Brieuc, I transitioned to Polytech Nice Sophia to
                                        further develop my skills.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="mt-8 flex flex-wrap gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <a
                                        href="https://github.com/SaadBeidourii"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <Github size={18} className="mr-2" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="mailto:saad.beidouri.pro@gmail.com"
                                        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <Mail size={18} className="mr-2" />
                                        <span>Contact</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/saad-beidouri-23b6481b4/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <Linkedin size={18} className="mr-2" />
                                        <span>LinkedIn</span>
                                    </a>
                                    <div className="flex items-center space-x-3">
                                        <a
                                            href="/cv/CV-Saad%20Beidouri-%20FR.pdf"
                                            download
                                            className="inline-flex items-center px-4 py-2 bg-[#2a6a55] text-white rounded-lg hover:bg-[#225544] transition-colors duration-200"
                                        >
                                            <Download size={18} className="mr-2" />
                                            <span>CV Français</span>
                                        </a>
                                        <a
                                            href="/cv/CV-Saad%20Beidouri-%20EN.pdf"
                                            download
                                            className="inline-flex items-center px-4 py-2 bg-[#2a6a55] text-white rounded-lg hover:bg-[#225544] transition-colors duration-200"
                                        >
                                            <Download size={18} className="mr-2" />
                                            <span>CV English</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="mb-[10px]">
                <Techno/>
            </section>

            {/* Projects Section */}
            <section className="mb-[10px]">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2a6a55] to-emerald-400">
              Featured Projects
            </span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedProjects.slice(0, 6).map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                status={project.status}
                                description={project.description}
                                icon={project.icon}
                                href={project.link}
                                githubLink={project.githubLink}
                            />
                        ))}
                    </div>
                    {sortedProjects.length > 6 && (
                        <div className="mt-8 text-center">
                            <a
                                href="/projects"
                                className="inline-flex items-center px-6 py-3 bg-[#2a6a55] text-white rounded-lg hover:bg-[#225544] transition-colors duration-200"
                            >
                                View All Projects
                                <svg
                                    className="w-4 h-4 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Timeline Section */}
            <section>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2a6a55] to-emerald-400">
              Experience Timeline
            </span>
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Professional Experience</h3>
                            <ol className="relative border-l-2 border-[#2a6a55]">
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
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Education</h3>
                            <ol className="relative border-l-2 border-[#2a6a55]">
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
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default HomePage
