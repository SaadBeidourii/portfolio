import { motion } from "framer-motion"

const Techno = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    }

    const categories = [
        {
            title: "Programming Languages",
            icons: [
                { name: "Go", class: "devicon-go-plain", hoverColor: "#00ADD8" },
                { name: "Kotlin", class: "devicon-kotlin-plain", hoverColor: "#7F52FF" },
                { name: "C", class: "devicon-c-plain", hoverColor: "#A8B9CC" },
                { name: "C++", class: "devicon-cplusplus-plain", hoverColor: "#00599C" },
                { name: "C#", class: "devicon-csharp-plain", hoverColor: "#7F52FF" },
                { name: "Python", class: "devicon-python-plain", hoverColor: "#3776AB" },
                { name: "Java", class: "devicon-java-plain", hoverColor: "#007396" },
                { name: "JavaScript", class: "devicon-javascript-plain", hoverColor: "#F7DF1E" },
                { name: "TypeScript", class: "devicon-typescript-plain", hoverColor: "#3178C6" },
            ],
        },
        {
            title: "Frameworks and Libraries",
            icons: [
                { name: "Spring", class: "devicon-spring-original", hoverColor: "#6DB33F" },
                { name: "React", class: "devicon-react-original", hoverColor: "#61DAFB" },
                { name: "TailwindCSS", class: "devicon-tailwindcss-original", hoverColor: "#06B6D4" },
                { name: "Angular", class: "devicon-angular-plain", hoverColor: "#DD0031" },
                { name: "RxJS", class: "devicon-rxjs-plain", hoverColor: "#B7178C" },
            ],
        },
        {
            title: "Tools and Platforms",
            icons: [
                { name: "PostgreSQL", class: "devicon-postgresql-plain", hoverColor: "#336791" },
                { name: "GitHub Actions", class: "devicon-githubactions-plain", hoverColor: "#2088FF" },
                { name: "Jenkins", class: "devicon-jenkins-line", hoverColor: "#D24939" },
                { name: "Docker", class: "devicon-docker-plain", hoverColor: "#2496ED" },
                { name: "Kubernetes", class: "devicon-kubernetes-plain", hoverColor: "#326CE5" },
                { name: "Unity", class: "devicon-unity-plain", hoverColor: "#000000" },
                { name: "Bash", class: "devicon-bash-plain", hoverColor: "#4EAA25" },
            ],
        },
    ]

    return (

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2a6a55] to-emerald-400">
                    Tech Stack</span>
            </h2>

            <div className="space-y-10">
                {categories.map((category, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                            {category.title}
                        </h3>
                        <motion.div
                            className="flex flex-wrap justify-center gap-6"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {category.icons.map((icon, iconIndex) => (
                                <motion.div key={iconIndex} className="tech-icon-wrapper" variants={item}>
                                    <div className="group flex flex-col items-center">
                                        <div
                                            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 group-hover:shadow-md group-hover:border-[#2a6a55]">
                                            <i
                                                className={`${icon.class} text-4xl transition-colors duration-300`}
                                                style={{color: "currentColor"}}
                                                onMouseOver={(e) => (e.currentTarget.style.color = icon.hoverColor)}
                                                onMouseOut={(e) => (e.currentTarget.style.color = "currentColor")}
                                            ></i>
                                        </div>
                                        <span
                                            className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400">{icon.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Techno
