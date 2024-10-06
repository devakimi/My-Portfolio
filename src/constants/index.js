import { dermaspace, nyosi, arcic, imoogle } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    wordpress,
    threads,
    typescript,
    bootstrap
   
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "CMS",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    }
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Wordpress and PHP Developer",
        company_name: "DermaspaceNG",
        icon: dermaspace,
        iconBg: "#accbe1",
        date: "March 2023 - Present",
        points: [
            "Developed and maintained a custom WordPress theme for a dermaspace website using PHP and JavaScript.",
            "Implemented a secure online booking system integrated with the scheduling software.",
            "Optimized website performance, achieving a 40% improvement in page load times.",
            "Build An AI Chatbot with pretrained data based on the comapany data.",
        ],
    },
    {
        title: "E-commerce Developer",
        company_name: "Nyosi Brand",
        icon: nyosi,
        iconBg: "#fbc3bc",
        date: "May 2024 - Present",
        points: [
            "Created a user-friendly and responsive e-commerce website using WordPress and WooCommerce for Nyosi brand.",
            "Customized product pages and implemented a easy-to-use checkout process, leading to a 30% increase in conversion rates.",
            "build a login sytem for cutomers to manage their order and track along the way.",
            "Conducted regular security audits and implemented measures to protect customer data and prevent unauthorized access.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Africa Rising Community",
        icon: arcic,
        iconBg: "#b7e4c7",
        date: "January 2024 - Present",
        points: [
            "Built a non-profit website with a community platform to support ARC initiatives.",
            "Developed a registration system to streamline user enrollment for ARC.",
            "Created an AI-powered live chatbot to answer student questions and provide real-time assistance.",
            "Ensured seamless functionality across both desktop and mobile devices.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "ImoogleAI",
        icon: imoogle,
        iconBg: "#a2d2ff",
        date: "June 2022 - Present",
        points: [
            "Led the development of a mentorship matching algorithm using machine learning techniques.",
            "Designed and implemented a RESTful API to support mobile app development for the platform.",
            "Optimized database queries, resulting in a 50% reduction in page load times for high-traffic pages.",
            "Conducted code reviews and mentored junior developers, improving overall team productivity by 20%.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Nyosi Brand',
        description: 'Redesigned and redeveloped the Nyosi Brand e-commerce website, showcasing their products and services.',
        link: 'https://nyosibrand.com',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'DermaspaceNG',
        description: 'Developed Dermaspace Esthetic and Wellness Center website, including spa services and skincare solutions.',
        link: 'https://dermaspaceng.com',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Africa Rising Community',
        description: 'Developed the Africa Rising Community website and platform, fostering connection and growth.',
        link: 'https://theafricarisingcommunity.org',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'ImoogleAI',
        description: 'Developed ImoogleAI, an AI model using Microsoft Azure for advanced AI capabilities.',
        link: 'https://chat.imoogelai.xyz',
    },
];