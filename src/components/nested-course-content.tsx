import React from 'react';
import useFetchJsonData from "../hooks/fetchJsonData";
import { useLocation, Link } from "react-router-dom";

interface Props {
  // Define your props here
}

const NestedCourseContent = (props: Props) => {
  
  const location = useLocation();

  const {
    course: { icon, courseInfo, isNested, slug, name, postID, taxonomy },
  } = location.state;
  const path = ``
  const { data: courseContents } = useFetchJsonData(path);
  return (
       <div className="w-full">
      <div className="py-5 mt-3 px-5">
        <img src={icon ? getImgUrl(icon) : ""} className="size-16" />
      </div>
      <div className="px-6 py-1">
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        {

            courseContents &&
              courseContents.map((element, index) => (
                <RegularContentCard courseDetail={element} index={index + 1} />
              ))}
        
      </div>
    </div>
  );
};

export default NestedCourseContent;