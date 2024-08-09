import React from "react";
import { useLocation, Link } from "react-router-dom";

import { getImgUrl } from "../lib/utils";
import { RegularContentCard } from "./course-cards";

import useFetchJsonData from "../hooks/fetchJsonData";

interface Props {
  // Define your props here
}

const NestedCourseContent = (props: Props) => {
  const location = useLocation();

  const {
    course: {
      icon,
      courseInfo,
      isNested,
      slug,
      name,
      postID,
      taxonomy,
      lang,
      index,
    },
  } = location.state;

  const path = `nested_posts/${lang}/${index + 1}`;

  const { data: courseContents } = useFetchJsonData(path);

  console.log(index, lang, location.state.course);

  return (
    <div className="w-full">
      <div className="py-5 mt-3 px-5">
        <img src={icon ? getImgUrl(icon) : ""} className="size-16" />
      </div>
      <p>Section</p>
      <div className="px-6 py-1">
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        {courseContents &&
          courseContents.map((element, index) => (
            <RegularContentCard courseDetail={element} index={index + 1} />
          ))}
      </div>
    </div>
  );
};

export default NestedCourseContent;
