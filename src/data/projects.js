import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faAnchor, faLaptop, faGamepad, faUtensils, faBrain } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faAnchor, faLaptop, faGamepad, faUtensils, faBrain);

const projects = [
    {
        title: "PS5-Takenoko",
        description: "Created a computerised version of the game 'Takenoko' by Antoine Bauza, using Java, compilable and executable with Maven.",
        icon: () => <FontAwesomeIcon icon="brain" />
    },
    {
        title: "PS6-PolyQuiz",
        description: "Developed an Angular-based quiz website tailored for elderly individuals, focusing on ease of use for those with difficulties in using computer tools.",
        icon: () => <FontAwesomeIcon icon="laptop" />
    },
    {
        title: "PS7-SophiaTech Eats",
        description: "Developed an online food ordering system for the Polytech Nice Sophia campus, streamlining ordering and delivery processes, supporting dynamic pricing and discounts, and improving restaurant management and user experience on campus.",
        icon: () => <FontAwesomeIcon icon="utensils" />
    },
    {
        title: "PS8-Full Stack, Special Quoridor with Fog of War",
        description: "Utilized Socket.io for real-time communication in a web-based strategic board game, enhancing player interaction and game dynamics with an AI algorithm for a modified Quoridor game with fog of war elements.",
        icon: () => <FontAwesomeIcon icon="gamepad" />
    },

];

export default projects;
