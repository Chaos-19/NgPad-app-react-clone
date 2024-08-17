import React from 'react';
import Lottie from 'lottie-react';
import quiz from '../../assets/quiz.json';

import QuizList from '../../components/quiz-list';

import quizLists from '../../assets/quiz/angular/all_quiz';

interface Props {}

const QuizPage = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Lottie animationData={quiz} loop={true} className="size-[80%] mx-auto" />
      <div className="">
        <QuizList quizList={quizLists} />
      </div>
    </div>
  );
};

export default QuizPage;
