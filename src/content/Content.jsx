
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

export const projects = [
    {
        title: 'Ticketing App',
        description: 'This is a simple ticketing project like jira',
        image: ticketing,
        githubLink: '#projects',
        liveDemo: '#projects',
        details: '#projects',
    },
    {
        title: 'Accounting App',
        description: 'This is a simple accounting project',
        image: accounting,
        githubLink: '#projects',
        liveDemo: '#projects',
        details: '#projects',
    },
    {
        title: 'Etlas',
        description: 'This is a simple company work management application',
        image: etlas,
        githubLink: '#projects',
        liveDemo: '#projects',
        details: '#projects',
    },
    {
        title: 'Ecommerce BackEnd Project',
        description: 'This is a simple ecommerce backEnd application secured with keycloak',
        image: ecommerace,
        githubLink: '#projects',
        liveDemo: '#projects',
        details: '#projects',
    },
];

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