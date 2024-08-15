import React from 'react';
import { Card } from '@/components/ui/card';
import { getImgUrl } from '../lib/utils';

interface Props {
  quizList: any[];
}

interface QuizCardProps {
  // Define your props here
  quiz_icon: string;
}

const QuizCard = ({ quiz_icon }: QuizCardProps) => {
  return (
    <Card className="p-3 p-8 flex items-center justify-center">
      <img src={getImgUrl(quiz_icon)} alt={name} className="" />
    </Card>
  );
};

const QuizList = ({ quizList }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-3">
      {quizList.map((quiz, index) => (
        <QuizCard {...quiz} />
      ))}
    </div>
  );
};

export default QuizList;
