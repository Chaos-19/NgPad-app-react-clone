import React from 'react';
import Lottie from 'lottie-react';

import tutorial from '../../assets/tuts.json';

interface Props {
  // Define your props here
}

const TutorialPage = (props: Props) => {
  return (
    <div className="py-5">
      <Lottie animationData={tutorial} loop={true} />
    </div>
  );
};

export default TutorialPage;
