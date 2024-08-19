import React from 'react';
import Lottie from 'lottie-react';
import news from '../../assets/news.json';

interface Props {
  // Define your props here
}

const NewsPage = (props: Props) => {
  return (
    <div className="py-5">
      <Lottie animationData={news} loop={true} className="w-[80%] mx-auto" />
    </div>
  );
};

export default NewsPage;
