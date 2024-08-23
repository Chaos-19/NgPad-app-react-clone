import {
  Home,
  TutorialPage,
  QuizPage,
  NewsPage,
  InterviewPage,
  LearnMorePage,
  HelpCenterPage,
} from '../screens';
import {
  Home as HomeIcon,
  Share,
  Bookmark,
  Star,
  ThumbsUp,
} from 'lucide-react';
import Lottie from 'lottie-react';
import news from '../assets/unlock.json';

export const TABS = [
  {
    title: 'home',
    pageName: 'home',
    component: <Home />,
  },
  {
    title: 'tutorials',
    pageName: 'tutorials',
    component: <TutorialPage />,
  },
  {
    title: 'quize',
    pageName: 'quize',
    component: <QuizPage />,
  },
  {
    title: 'interview',
    pageName: 'interview',
    component: <InterviewPage />,
  },
  {
    title: 'news',
    pageName: 'news',
    component: <NewsPage />,
  },
  {
    title: 'learn more',
    pageName: 'learn more',
    component: <LearnMorePage />,
  },
  {
    title: 'help center',
    pageName: 'help center',
    component: <HelpCenterPage />,
  },
];

export const navDraweLinks = [
  {
    title: 'Home',
    link: '/',
    icon: <HomeIcon size={24} color="red" />,
  },
  {
    title: 'Bookmarks',
    link: '/bookmarks',
    icon: <Bookmark size={24} />,
  },
  {
    title: 'get pro unlock everything',
    link: '/',
    icon: <Lottie animationData={news} loop={true} className="size-8" />,
  },
  {
    title: 'rate app',
    link: '/',
    icon: <Star size={24} />,
  },
  {
    title: 'Like us',
    link: '/',
    icon: <ThumbsUp size={24} />,
  },
  {
    title: 'share',
    link: '/',
    icon: <Share size={24} />,
  },
];
