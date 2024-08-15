import React from 'react';
import { TobBar, NestedCourseContent } from '../components';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Props {}

const NestedContentDetail = (props: Props) => {
  return (
    <section className="overflow-y-hidden w-full">
      <TobBar style=" bg-transparent" />
      <ScrollArea>
        <div className="h-[calc(100vh_-_120px)] max-w-none">
          <NestedCourseContent />
        </div>
      </ScrollArea>
    </section>
  );
};

export default NestedContentDetail;
