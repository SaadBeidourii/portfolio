

const educationItems = [
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "4th Year Engineering Cycle, Polytech Nice Sophia",
        date: "2023 – Present",
        tag: "Education",
        description: "Enhancing skills in Machine Learning, Java RMI, and software security. Focus on advanced software design, ISA/DevOps using Spring Boot, Web Development, and 3D design with Unity and Blender."
    },
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "3rd Year Engineering Cycle, Polytech Nice Sophia",
        date: "2022 – 2023",
        description: "Advanced computer science skills through coursework in Java, C, systems programming, and Python. Proficiency in web and mobile development using Android Studio, Angular, TypeScript, and HTML/CSS."
    },
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "MPSI - MP, Lycée Francois Rabelais",
        date: "2020 – 2022",
        description: "Admitted into the engineering school (Polytech Nice Sophia). Graduated with honors."
    },
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "Baccalaureate, Les Ecoles Riad",
        date: "2019 – 2020",
        description: "Option in mathematical science B (industrial science). Graduated with High Honor."
    }
];

const professionalItems = [
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "Mines Paris - PSL , Apprenticeship Intern",
        date: "May 2024 – Present",
        tag: "Internship",
        description: "Developed a web/native application for doctoral students to track TIMES scenario resolutions, enhancing energy policy analysis. Gained experience with Python, NiceGUI, Portainer, Docker, and MySQL."
    },
    {
        icon: (
            <svg className="w-2.5 h-2.5 text-black dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        ),
        title: "Odata, Apprenticeship Intern",
        date: "July 2022 – August 2022",
        description: "Conducted HTML/CSS code reviews for the company's product sales website, ensuring optimal functionality and user experience. Assisted in the redesign of product layouts and the overall website aesthetic."
    },


];


export { educationItems, professionalItems };
