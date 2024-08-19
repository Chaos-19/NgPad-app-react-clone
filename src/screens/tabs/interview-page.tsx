import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

import { getImgUrl } from '../../lib/utils';
import interviews from '../../assets/interviews/angular/angular_home.json';

interface Props {}

interface InterviewCardProps {
  icon: string;
  postID: string;
  name: string;
}
//course/:slug/interview/questions
const InterviewCard = ({ icon, name, postID }: InterviewCardProps) => {
  return (
    <Link to={`course/${postID}/interview/questions`}>
      <Card className="p-3 p-8 flex items-center justify-center">
        <img src={getImgUrl(icon)} alt={name} className="h-[70px]" />
      </Card>
    </Link>
  );
};

const InterviewPage = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 px-3 py-2">
      {interviews.map((interview, index) => (
        <InterviewCard {...interview} />
      ))}
    </div>
  );
};

export default InterviewPage;
