import user_image from './user-image.png';
import edu_icon from './edu-icon.png';
import project_icon from './project-icon.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import menu_black from './menu-black.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import tensorflow from './tensorflow.png';
import pytorch from './pytorch.png'
import python from './python.png'
import docker from './docker.png'
import postgres from './postgres.png'
import nextjs from './nextjs.png'
import airflow from './airflow.png'
import github from './github.png'
import linkedin from './linkedin.png'
import thinkagain from './thinkagain.jpg'
import thepowerofhabit from './thepowerofhabit.jpg'
import sevenhabits from './7habits.jpg'

export const assets = {
    python,
    nextjs,
    tensorflow,
    pytorch,
    docker,
    postgres,
    airflow,
    github,
    linkedin,
    thinkagain,
    thepowerofhabit,
    sevenhabits,
    user_image,
    edu_icon,
    project_icon,
    git,
    mongodb,
    right_arrow_white,
    logo,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    menu_black,
    close_black,
    close_white,
    right_arrow,
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', boldDescription: '- MSc in Artificial Intelligence',  shortDescription:' \tK.N.Toosi University of Technology', shorterDescription: '2019 - 2022', boldDescription2: '- BASc in Electrical Engineering', shortDescription2: 'Semnan Univeristy', shorterDescription2: '2012 - 2017'},
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work', boldDescription: '- Data Scientist', shortDescription:'\tOfogh Koorosh Chain Stores', shorterDescription: '\tJuly 2025 - Present',  boldDescription2:'', shortDescription2: '', shorterDescription2: ''},
];

export const toolsData = [
    { name: 'Python', icon: assets.python },
    { name: 'Nextjs', icon: assets.nextjs},
    { name: 'TensorFlow', icon: assets.tensorflow},
    { name: 'Pytorch', icon: assets.pytorch},
    { name: 'Docker', icon: assets.docker },
    { name: 'MongoDB', icon: assets.mongodb },
    { name: 'postgres', icon: assets.postgres },
    { name: 'Git', icon: assets.git },
    { name: 'Airflow', icon: assets.airflow },

];


export const initialBooks = [
    {
    id: 3,
    title: "7 Habits of Highly Effective People",
    cover: assets.sevenhabits,
    dateRead: "I'm reading",
  },
  {
    id: 1,
    title: "Think Again",
    cover: assets.thinkagain,
    dateRead: "I read it",
  },
  {
    id: 2,
    title: "The Power of Habit",
    cover: assets.thepowerofhabit,
    dateRead: "I read it",
  },
];

export const achievements = [
    { title: "New Achievement", date: "?", description1: "More achievements coming!", description2: "", description3: "", description4: "", icon: "🚀" },
    { title: "Took the GRE score of 325", date: "Apr 2023", description1: "- Quant: 170", description2: "- Verbal: 155", description3: "- Writing: 4", description4: "", icon: "💻" },
  { title: "Ranked 1st in a problem-based contest", date: "Feb 2021", description1: "- Issued by National Elite Foundation", description2: "- I was in charge of the NLP part", description3: "", description4: "", icon: "🏆" },
  { title: "Master's project scholarship recipient", date: "July 2021", description1: "- Issued by department of computer engineering", description2: "", description3: "", description4: "", icon: "🏆" },
  { title: "Ranked 3rd in the regional wrestling tournament", date: "July 2011", description1: "", description2: "", description3: "", description4: "", icon: "🥉" },
];


export const hobbies = [
    {
        title: 'Hiking',
        emoji: '🥾',
        left: '10%',
        top: '10%'
    },
    {
        title: 'Podcast',
        emoji: '🎧',
        left: '60%',
        top: '60%'
    },
    {
        title: 'TV series',
        emoji: '📺',
        left: '50%',
        top: '20%'
    },
    {
        title: 'Reading',
        emoji: '📚',
        left: '30%',
        top: '80%'
    }
]
