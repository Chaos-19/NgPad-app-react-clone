export const TABS = [{
  title: 'home',
  pageName: 'home',
  component: '',
},
  {
    title: 'tutorials',
    pageName: 'tutorials',
    component: '',
  },
  {
    title: 'quize',
    pageName: 'quize',
    component: '',
  },
  {
    title: 'interview',
    pageName: 'interview',
    component: '',
  },
  {
    title: 'news',
    pageName: 'news',
    component: '',
  },
  {
    title: 'learn more',
    pageName: 'learn more',
    component: '',
  },
  {
    title: 'help center',
    pageName: 'help center',
    component: '',
  },
];
export const quizSuggestions = {
  90: {
    minScore: 90,
    maxScore: 100,
    message: "Excellent work! You’ve mastered this topic. Consider challenging yourself with more advanced quizzes or try applying what you've learned in a real-world project."
  },
  75: {
    minScore: 75,
    maxScore: 89,
    message: "Great job! You’ve got a solid understanding. Reviewing the few concepts you missed could help solidify your knowledge even further."
  },
  60: {
    minScore: 60,
    maxScore: 74,
    message: "Good effort! You have a decent grasp of the material. It might be helpful to revisit the areas where you struggled to strengthen your understanding."
  },
  40: {
    minScore: 40,
    maxScore: 59,
    message: "You're getting there! Consider reviewing the key concepts and try the quiz again. Practice makes perfect!"
  },
  20: {
    minScore: 20,
    maxScore: 39,
    message: "Don’t get discouraged! Take some time to go over the material and give the quiz another shot. Each attempt will bring you closer to your goal."
  },
  0: {
    minScore: 0,
    maxScore: 19,
    message: "It looks like you’re just starting out. Take your time to thoroughly review the material, and don't hesitate to reach out for help if needed. You've got this!"
  }
};
