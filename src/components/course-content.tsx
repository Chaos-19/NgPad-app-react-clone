import React from "react";
import { useLocation } from "react-router-dom";
import { getImgUrl } from "../lib/utils";
import useFetchJsonData from "../hooks/fetchJsonData";

interface Props {

}

interface ContentCardProps {
 
}

const ContentCard = (props: ContentCardProps) => {
  return <div></div>;
};

const CourseContent = (props: Props) => {
  //const {data:courseContents} = useFetchJsonData(path)
  const location = useLocation();

  const {
    course: { icon, courseInfo },
  } = location.state;

  return (
    <div className="w-full">
      <div className="py-5 mt-3 px-5">
        <img src={getImgUrl(icon)} className="size-16" />
      </div>
      <div className="px-6 py-1">
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
    </div>
  );
};

export default CourseContent;
