
// import icons from react-icons
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import ticketing from '../assets/images/projects/ui-project-1.jpg';
import accounting from '../assets/images/projects/ui-project-2.jpg';
import ecommerace from '../assets/images/projects/web-project-1.jpg';
import etlas from '../assets/images/projects/web-project-2.jpg';

import backend from "../assets/images/skills/backend.png";
import ps from "../assets/images/skills/ps.png";
import reactjs from "../assets/images/skills/react.png";


export const projects = [
    {
        title: 'Ticketing App',
        description: 'This is a simple ticketing project like jira',
        image: ticketing,
        links: {
            githubLink: '#projects',
            liveDemo: '#projects',
            details: '#projects',
        }
    },
    {
        title: 'Accounting App',
        description: 'This is a simple accounting project',
        image: accounting,
        links: {
            githubLink: '#projects',
            liveDemo: '#projects',
            details: '#projects',
        }
    },
    {
        title: 'Etlas',
        description: 'This is a simple company work management application',
        image: etlas,
        links: {
            githubLink: '#projects',
            liveDemo: '#projects',
            details: '#projects',
        }
    },
    {
        title: 'Ecommerce BackEnd Project',
        description: 'This is a simple ecommerce backEnd application secured with keycloak',
        image: ecommerace,
        links: {
            githubLink: '#projects',
            liveDemo: '#projects',
            details: '#projects',
        }
    },
];

export const skills = {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
        {
            name: "BackEnd",
            description: "BackEnd development with Java Spring Boot",
            logo: backend,
            skills: [
                'Java',
                'Spring-boot',
                'Hibernate',
                'SQL',
                'Restful API',
                'Kafka',

            ]
        },
        {
            name: "FrontEnd",
            description: "FrontEnd devolopment with React",
            logo: reactjs,
            icons: [

            ]
        },
        {
            name: "UI & Graphic Design",
            description: "UI & Graphic Design with adobe apps",
            logo: ps,
            skills: [

            ]
        }
    ],
    icon: MdArrowForward,
}

export const headrMenue =
    [
        {
            link: '#aboutme',
            title: 'About Me'
        },
        {
            link: '#projects',
            title: 'Projects'
        },
        {
            link: '#skills',
            title: 'Skills'
        },
        {
            link: '#services',
            title: 'Services'
        },
        {
            link: '#contact',
            title: 'Contact'
        }
    ];

export const popUpMenuecontent = {

    nav: [
        {
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],

}


export const content = {

}

export const themes = [
    {
        name: "default",
        color: "rgb(17, 125, 192)",
    },
    {
        name: "youtube",
        color: "rgb(255, 2, 0)",
    },
    {
        name: "twitch",
        color: "rgb(145, 71, 255)",
    },
    {
        name: "hacker",
        color: "rgb(70, 153, 235)",
    },
    {
        name: "miro",
        color: "rgb(255, 221, 51)",
    },
    {
        name: "mangoDB",
        color: "rgb(0, 237, 100)",
    },
    {
        name: "jetBrian",
        color: "rgb(107, 86, 255)",
    },
    {
        name: "pusher",
        color: "rgb(135, 49, 210)",
    },
];


export default content;