import React from 'react';
import { TobBar, CourseContent } from '../components';
interface Props {
  // Define your props here
}

const DetailContentLayout = (props: Props) => {
  return (
    <section>
      <TobBar />
      <CourseContent />
    </section>
  );
};

export default DetailContentLayout;
