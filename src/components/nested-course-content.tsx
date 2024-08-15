import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { getImgUrl } from '../lib/utils';
import { RegularContentCard } from './course-cards';

import useFetchJsonData from '../hooks/fetchJsonData';

interface Props {}

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
      folder,
    },
  } = location.state;

  const path = `nested_posts/${folder.toLowerCase()}/${index + 1}`;

  const { data: courseContents } = useFetchJsonData(path);

  return (
    <div className="w-full pb-32">
      <div className="py-5 mt-3 px-5">
        <img src={icon ? getImgUrl(icon) : ''} className="size-16" />
      </div>
      <div className="px-6 py-1 flex flex-col gap-2">
        <p className="text-sm font-medium">Section {index + 1}</p>
        <h2 className="text-xl font-bold capitalize">{name}</h2>
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        {courseContents &&
          courseContents.map((element, index) => (
            <RegularContentCard
              courseDetail={element}
              index={index + 1}
              lang={folder}
            />
          ))}
      </div>
    </div>
  );
};

export default NestedCourseContent;
