import projects from "../data/projects"
import { motion } from "framer-motion"
import Card from "./cards/Card"

const Projects = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 flex-grow">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2a6a55] to-emerald-400">Projects</span>
            </h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {projects.map((project, index) => (
                    <motion.div key={index} variants={item}>
                        <Card
                            title={project.title}
                            status={project.status}
                            description={project.description}
                            icon={project.icon}
                            href={project.link}
                            githubLink={project.githubLink}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
