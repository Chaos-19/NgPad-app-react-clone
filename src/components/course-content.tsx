import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getImgUrl } from "../lib/utils";
import useFetchJsonData from "../hooks/fetchJsonData";
import type { Post } from "../types";

interface Props {}

interface NestedContentCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug: string;
  isNested: boolean;
  postID: string;
  taxonomy: string;
}

const NestedContentCard = ({
  name,
  icon,
  courseInfo,
  slug,
  isNested,
  postID,
  taxonomy,
}: NestedContentCardProps) => {
  return (
    <Link
      to={`course/nested_content/${slug}`}
      state={{
        course: {
          icon,
          name,
          slug,
          courseInfo,
          isNested,
          taxonomy,
        },
      }}
    >
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-5 py-1">
          <img src={getImgUrl(icon)} alt={name} className="size-14" />
          <div className="flex flex-col gap-2 py-1.5">
            <h2 className="text-lg font-bold">{name.replace("&amp;", "&")}</h2>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {courseInfo}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

interface RegularContentCardProps {
  courseDetail: Post;
  index: number;
}

const RegularContentCard = ({
  courseDetail,
  index,
}: RegularContentCardProps) => {
  return (
    <Link
      to={`detail-content/${courseDetail.slug}`}
      state={{ courseDetail: courseDetail }}
    >
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-8  py-1">
          <h2 className="text-lg font-black text-muted-foreground">
            {index < 10 ? `0${index}` : index}.
          </h2>
          <div className="flex flex-col gap-2 py-1.5">
            <h2
              className="text-base text-muted-foreground font-bold"
              dangerouslySetInnerHTML={{ __html: courseDetail.title.rendered }}
            ></h2>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const CourseContent = (props: Props) => {
  const location = useLocation();

  const {
    course: { icon ="", courseInfo, isNested, slug, name, postID, taxonomy },
  } = location.state;

  let path = isNested
    ? `nested_categories/${postID}`
    : taxonomy
    ? `nested_posts/${postID}`
    : `posts/${postID}`;

  const { data: courseContents } = useFetchJsonData(path);

  return (
    <div className="w-full">
      <div className="py-5 mt-3 px-5">
        <img src={getImgUrl(icon)?? ""} className="size-16" />
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
                />
              ))}
          </>
        ) : (
          <>
            {courseContents &&
              courseContents.map((element, index) => (
                <RegularContentCard courseDetail={element} index={index + 1} />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
