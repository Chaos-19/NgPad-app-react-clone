import {
  Home as HomeIcon,
  Share,
  Bookmark,
  Star,
  ThumbsUp,
} from 'lucide-react';
import Lottie from 'lottie-react';
import news from '~/assets/unlock.json';

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
