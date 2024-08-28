import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { RegularContentCard, NestedContentCard } from './course-cards';
import { getImgUrl } from '../lib/utils';
import useFetchJsonData from '../hooks/fetchJsonData';

interface Props {}

const CourseContent = (props: Props) => {
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
      folder,
    },
  } = location.state;

  let path = isNested
    ? `nested_categories/${postID}`
    : taxonomy
      ? `nested_posts/${postID}`
      : `posts/${postID}`;

  const { data: courseContents } = useFetchJsonData(path);

  return (
    <div className="w-full pb-32">
      <div className="py-5 mt-3 px-5">
        <img src={icon ? getImgUrl(icon) : ''} className="size-16" />
      </div>
      <div className="px-6 py-1">
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
      <div className="flex flex-col gap-3 px-4 py-5">
        {isNested ? (
          <>
            {courseContents &&
              courseContents.map((element, index) => (
                <NestedContentCard
                  {...element}
                  icon={icon}
                  key={element.name}
                  folder={folder}
                  index={index}
                />
              ))}
          </>
        ) : (
          <>
            {courseContents &&
              !taxonomy &&
              courseContents.map((element, index) => (
                <RegularContentCard
                  courseDetail={element}
                  index={index + 1}
                  lang={folder}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
