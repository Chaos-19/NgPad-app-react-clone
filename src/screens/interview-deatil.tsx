import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';

import { TobBar } from '../components';
import { InterviewListCard } from '../components/course-cards';
import { loadData } from '../lib/utils';

interface Props {}

interface InterviewListProps {
  interviews: any[];
}

const InterviewList = ({ interviews }: InterviewListProps) => {
  return (
    <div className="flex flex-col justify-center">
      {interviews.map((interview, index) => (
        <InterviewListCard
          index={index + 1}
          title={interview.title.rendered}
          content={interview.content.rendered}
          lang={'jsx'}
        />
      ))}
    </div>
  );
};

export async function loader({ params }) {
  const data = await loadData(`interviews/angular/${params.slug}`);
  return { data };
}

const InterviewDeatil = (props: Props) => {
  const { data: interviewList } = useLoaderData();

  return (
    <section className="overflow-y-hidden w-full">
      <TobBar />
      <ScrollArea>
        <div className="h-[calc(100vh_-_140px)]">
          <InterviewList interviews={interviewList} />
        </div>
      </ScrollArea>
    </section>
  );
};

export default InterviewDeatil;
