// overlay.js
import teamIcon from '../assets/hero/hero-icons/team.svg';
import studyIcon from '../assets/hero/hero-icons/study.svg';
import homeIcon from '../assets/hero/hero-icons/home.svg';
import workplaceIcon from '../assets/hero/hero-icons/workplace.svg';

export const overlayItems = [
  {
    id: 1,
    title: "Командная работа",
    image: teamIcon,
    link: "/team"
  },
  {
    id: 2,
    title: "Обучение",
    image: studyIcon,
    link: "/courses" 
  },
  {
    id: 3,
    title: "Работа из дома",
    image: homeIcon,
    link: "/remote" 
  },
  {
    id: 4,
    title: "Рабочее место",
    image: workplaceIcon,
    link: "/workplace" 
  },
];