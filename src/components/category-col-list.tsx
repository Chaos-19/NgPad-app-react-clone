import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CatagoryColListCard } from './category-list-cards';

import useFetchJsonData from '../hooks/fetchJsonData';
import type { CategoryColListProps } from '../types';
import { getImgUrl } from '../lib/utils';

const CategoryColList = ({
  title,
  fileName,
  bannerIcon,
  icon,
}: CategoryColListProps) => {
  const { data: categoryList, error } = useFetchJsonData(fileName);

  return (
    <Accordion type="single" collapsible defaultValue={title}>
      <AccordionItem value={title} className="">
        <AccordionTrigger className="px-4 [&[:active]]:no-underline data-[state=close]:no-underline data-[state=open]:no-underline">
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
                <CatagoryColListCard
                  key={info.name}
                  {...info}
                  folder={info.postID}
                />
              ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryColList;
