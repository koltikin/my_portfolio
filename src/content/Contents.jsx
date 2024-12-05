
// import icons from react-icons
import { MdArrowForward } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import ticketing from '../assets/images/projects/ui-project-1.jpg';
import accounting from '../assets/images/projects/ui-project-2.jpg';
import ecommerceBackend from '../assets/images/projects/web-project-1.jpg';
import etlasBusiness from '../assets/images/projects/web-project-2.jpg';

import backend from "../assets/images/skills/backend.png";
import ps from "../assets/images/skills/ps.png";
import reactjs from "../assets/images/skills/react.png";

import { useTranslation } from "react-i18next";

import developer from '../assets/images/hero/developer.svg';
import developer_dark from '../assets/images/hero/developer-dark.svg';

export const useHeaderMenu = () => {

    const { t } = useTranslation('header');

    return {
        logoLetter: {
            logo: t('logoLetter', { logoName: 'Ziya' }),
            link: '#aboutme',
        },

        headerMenu: [
            {
                title: t('headerMenu.aboutMe'),
                link: '#aboutme'
            },
            {
                title: t('headerMenu.projects'),
                link: '#projects'

            },
            {
                title: t('headerMenu.skills'),
                link: '#skills',

            },
            {
                title: t('headerMenu.services'),
                link: '#services'

            },
            {
                title: t('headerMenu.contacts'),
                link: '#contact'

            }
        ]
    };
};


export const useHeroContent = (themeMode) => {
    const { t } = useTranslation('hero');

    return {
        textContent: {
            heading: t('heading', { name: 'Ziya Kasgari' }),
            subheading: t('subheading'),
            buttonText: t('buttonText'),
        },
        image: themeMode === 'dark' ? developer : developer_dark,
    };
};

export const useProjectsContent = () => {
    const { t } = useTranslation('projects');

    return {
        title: t('title'),
        subtitle: t('subtitle'),
        projects: t('projects', { returnObjects: true }).map((project, index) => ({
            title: project.title,
            description: project.description,
            image: getImageForProject(project.title),  // Customize this based on project title or other criteria
            links: {
                githubLink: getGitHubLinkForProject(project.title),
                liveDemo: getLiveDemoLinkForProject(project.title),
                details: getDetailsForProject(project.title),
            }
        })),
    };
};

// Helper function to set images based on project title
const getImageForProject = (projectTitle) => {
    switch (projectTitle) {
        case 'Ticketing App':
            return ticketing;
        case 'Accounting App':
            return accounting;
        case 'Ecommerce Backend Project':
            return ecommerceBackend;
        case 'Etlas Business Management App':
            return etlasBusiness;
        default:
            return defaultImage;
    }
};

// Helper function to set gitHub links based on project title
const getGitHubLinkForProject = (projectTitle) => {
    switch (projectTitle) {
        case 'Ticketing App':
            return 'https://github.com/koltikin/ticketing-applicaton';
        case 'Accounting App':
            return 'https://github.com/koltikin/my-accounting-app';
        case 'Ecommerce Backend Project':
            return 'https://github.com/koltikin/uydev-ecommerce';
        case 'Etlas Business Management App':
            return 'https://github.com/koltikin/Etlas';
        default:
            return 'https://github.com/koltikin';
    }
};

// Helper function to set live demo based on project title
const getLiveDemoLinkForProject = (projectTitle) => {
    switch (projectTitle) {
        case 'Ticketing App':
            return 'https://ticketing.uydev.com.tr';
        case 'Accounting App':
            return 'https://accounting.uydev.com.tr';
        case 'Ecommerce Backend Project':
            return 'https://ecommerce.uydev.com.tr';
        case 'Etlas Business Management App':
            return 'https://etlas.uydev.com.tr';
        default:
            return 'https://uydev.com.tr';
    }
};

// Helper function to set images based on project title
const getDetailsForProject = (projectTitle) => {
    switch (projectTitle) {
        case 'Ticketing App':
            return ticketing;
        case 'Accounting App':
            return accounting;
        case 'Ecommerce Backend Project':
            return ecommerceBackend;
        case 'Etlas Business Management App':
            return etlasBusiness;
        default:
            return defaultImage;
    }
};

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


export const languages = [
    "en",
    "tr",
    // "uy",
    // "ar"
]


