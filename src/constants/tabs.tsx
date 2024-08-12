import {
  Home,
  TutorialPage,
  QuizPage,
  NewsPage,
  InterviewPage,
  LearnMorePage,
  HelpCenterPage,
} from "../screens";

export const TABS = [
  {
    title: "home",
    pageName: "home",
    component: <Home />,
  },
  {
    title: "tutorials",
    pageName: "tutorials",
    component: <TutorialPage />,
  },
  {
    title: "quize",
    pageName: "quize",
    component: <QuizPage />,
  },
  {
    title: "interview",
    pageName: "interview",
    component: <InterviewPage />,
  },
  {
    title: "news",
    pageName: "news",
    component: <NewsPage />,
  },
  {
    title: "learn more",
    pageName: "learn more",
    component: <LearnMorePage />,
  },
  {
    title: "help center",
    pageName: "help center",
    component: <HelpCenterPage />,
  },
];
