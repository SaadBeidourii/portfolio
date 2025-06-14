import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAnchor, faLaptop, faGamepad, faUtensils, faBrain, faDollar } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faAnchor, faLaptop, faGamepad, faUtensils, faBrain, faDollar);

const projects = [
    {
        title: "PS5-Takenoko",
        status : "Completed",
        description: "Created a computerised version of the game 'Takenoko' by Antoine Bauza, using Java, compilable and executable with Maven.",
        icon: () => <FontAwesomeIcon icon="brain" />
    },
    {
        title: "PS6-PolyQuiz",
        status : "Completed",
        description: "Developed an Angular-based quiz website tailored for elderly individuals, focusing on ease of use for those with difficulties in using computer tools.",
        icon: () => <FontAwesomeIcon icon="laptop" />
    },
    {
        title: "PS7-SophiaTech Eats",
        status : "Completed",
        description: "Developed an online food ordering system for the Polytech Nice Sophia campus, streamlining ordering and delivery processes, supporting dynamic pricing and discounts, and improving restaurant management and user experience on campus.",
        icon: () => <FontAwesomeIcon icon="utensils" />
    },
    {
        title: "PS8-Full Stack, Special Quoridor with Fog of War",
        status : "Completed",
        description: "Utilized Socket.io for real-time communication in a web-based strategic board game, enhancing player interaction and game dynamics with an AI algorithm for a modified Quoridor game with fog of war elements.",
        icon: () => <FontAwesomeIcon icon="gamepad" />
    },
    {
        title: "Budgeteer",
        status : "In Progress",
        description: "Developed a budgeting application for Android devices, enabling users to track their roommates' expenses and manage shared expenses, enhancing financial transparency and accountability.",
        githubLink: "https://github.com/orgs/budgeteer-app/repositories",
        icon: () => <FontAwesomeIcon icon="dollar" />

    },
    {
        title: "MediaHub",
        status : "In Progress",
        description: "Web application allowing users to organize and manage their digital media libraries. Using GoLang for the backend and Angular for the frontend, it provides a user-friendly interface for media management.",
        githubLink: "https://github.com/SaadBeidourii/MediaHub",
        icon: () => <FontAwesomeIcon icon="anchor" />
    }

];

const sortedProjects = [...projects].sort((a, b) => (a.status === 'In Progress' ? -1 : 1));

export default sortedProjects;
