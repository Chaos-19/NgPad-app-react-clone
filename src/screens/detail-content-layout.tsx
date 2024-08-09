import React from 'react';
import { TobBar, CourseContent } from '../components';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {
  // Define your props here
}

const DetailContentLayout = (props: Props) => {
  return (
    <section className="overflow-y-hidden w-full">
      <TobBar />
      <ScrollArea>
        <div className="h-[700px]">
          <CourseContent />
        </div>
      </ScrollArea>
    </section>
  );
};

export default DetailContentLayout;
