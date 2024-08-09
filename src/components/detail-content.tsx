import React from 'react';
import { useLocation } from "react-router-dom"
interface Props {
  // Define your props here
}

const DetailContent = (props: Props) => {
  
  const location = useLocation()
  
  const { courseDetail } = location.state
  
  return (
    <div dangerouslySetInnerHTML={{ __html: courseDetail.content.rendered }}>
      
    </div>
  );
};

export default DetailContent;