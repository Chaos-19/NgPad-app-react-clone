import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import DetailContent from "./detail-content";
import { getImgUrl } from "../lib/utils";
import type {
  NestedContentCardProps,
  RegularContentCardProps,
  InterviewListCardProps,
} from "../types";

export const NestedContentCard = ({
  name,
  icon,
  courseInfo,
  slug,
  isNested,
  postID,
  taxonomy,
  lang,
  index,
  folder,
}: NestedContentCardProps) => {
  console.log({
    name,
    icon,
    courseInfo,
    slug,
    isNested,
    postID,
    taxonomy,
    lang,
    index,
  });

  return (
    <Link
      to={`nested_content/${slug}/content`}
      state={{
        course: {
          icon,
          name,
          slug,
          courseInfo,
          isNested,
          taxonomy,
          lang,
          index,
          folder,
        },
      }}
    >
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-5 py-1">
          <img src={getImgUrl(icon)} alt={name} className="size-14" />
          <div className="flex flex-col gap-2 py-1.5">
            <h2
              className="text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: name }}
            ></h2>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {courseInfo}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export const RegularContentCard = ({
  courseDetail,
  index,
  lang,
}: RegularContentCardProps) => {
  return (
    <Link
      to={`detail-content/${courseDetail.slug}`}
      state={{ courseDetail: courseDetail, lang }}
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

export const InterviewListCard = ({
  index,
  title,
  content,
  lang,
}: InterviewListCardProps) => {
  const wrappContent = (content: string) => `<div class="note">
  ${content}
  </div>
  `;

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={title} className="">
        <AccordionTrigger className="px-4 data-[state=close]:no-underline data-[state=open]:no-underline">
          <div cclassName="flex items-center gap-3 py-2 px-1.5">
            <h2 className="text-lg font-black text-muted-foreground flex items-center gap-4">
              <span>{index < 10 ? `0${index}` : index}.</span>
              <span
                className="text-left"
                dangerouslySetInnerHTML={{ __html: title }}
              ></span>
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="w-[calc(100vw_-_10px)] mx-auto px-3 py-1 h-max">
            <DetailContent
              content={wrappContent(content)}
              lang={"javaScript"}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
