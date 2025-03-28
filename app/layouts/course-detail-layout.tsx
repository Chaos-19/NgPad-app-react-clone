import { Outlet } from 'react-router';
import { useContext } from "react";
import { ScrollArea } from '~/components/ui/scroll-area';
import { TobBar } from '~/components';
import { CourseContext } from '~/context/course'

const CourseDetailLayout = () => {
  const { courseContent } = useContext(CourseContext);

  return (
   <section className="overflow-y-hidden w-full">
      <TobBar appTitle={courseContent?.title}/>
      <ScrollArea>
        <div className="h-[calc(100vh_-_120px)] max-w-none">
          <Outlet />
        </div>
      </ScrollArea>
    </section>
  );
};


export default CourseDetailLayout;