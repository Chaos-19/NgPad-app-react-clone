import React from 'react';
import { TobBar, Quiz } from '../components';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {
  // Define your props here
}

const QuizDetail = (props: Props) => {
  return (
    <section className="overflow-y-hidden w-full">
      <TobBar />
      <ScrollArea>
        <div className="h-[calc(100vh_-_140px)]">
          <Quiz />
        </div>
      </ScrollArea>
    </section>
  );
};

export default QuizDetail;
