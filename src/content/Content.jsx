
// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import ticketing from '../assets/images/projects/ui-project-1.jpg';
import accounting from '../assets/images/projects/ui-project-2.jpg';
import ecommerace from '../assets/images/projects/web-project-1.jpg';
import etlas from '../assets/images/projects/web-project-2.jpg';

import figma from "../assets/images/skills/figma.png";
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
        },
        {
            name: "FrontEnd",
            description: "FrontEnd devolopment with React",
            logo: reactjs,
        },
        {
            name: "UI & Graphic Design",
            description: "UI & Graphic Design with adobe apps",
            logo: ps,
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

export const content = {

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
export default content;