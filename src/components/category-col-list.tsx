import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useFetchJsonData from '../hooks/fetchJsonData';
import type { CategoryColListProps, CategoryColListCardProps } from '../types';
import { getImgUrl } from '../lib/utils';

const CatagoryCard = ({
  name,
  icon,
  courseInfo,
  slug,
  isNested,
  postID,
  folder,
}: CategoryColListCardProps) => {
  return (
    <Link
      to={`course/content/${slug}`}
      state={{
        course: {
          icon,
          name,
          slug,
          courseInfo,
          isNested,
          postID,
          folder,
        },
      }}
    >
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-5 py-1">
          <img src={getImgUrl(icon)} alt={name} className="size-14" />
          <div className="flex flex-col gap-2 py-1.5">
            <h2 className="text-lg font-bold">{name.replace('&amp;', '&')}</h2>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {courseInfo}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

const CategoryColList = ({
  title,
  fileName,
  bannerIcon,
  icon,
}: CategoryColListProps) => {
  const { data: categoryList, error } = useFetchJsonData(fileName);

  console.log(categoryList);

  return (
    <Accordion type="single" collapsible defaultValue={title}>
      <AccordionItem value={title} className="">
        <AccordionTrigger
          data-state="open"
          className="px-4 data-[state=close]:no-underline data-[state=open]:no-underline [data-state='open']"
        >
          <div className="flex justify-between items-center gap-5 py-4 px-5">
            <img src={getImgUrl(icon)} className="size-10" />
            <h2 className="text-base font-semibold text-foreground capitalize text-left">
              {title}
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3 px-4">
            {bannerIcon && (
              <Card className="shadow border drop-shadow backdrop-brightness-100 py-5">
                <div className="flex justify-center items-center py-4">
                  <img
                    src={getImgUrl(bannerIcon)}
                    alt="banner"
                    className="size-24"
                  />
                </div>
              </Card>
            )}
            {categoryList &&
              categoryList.map((info) => (
                <CatagoryCard key={info.name} {...info} folder={info.postID} />
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryColList;
