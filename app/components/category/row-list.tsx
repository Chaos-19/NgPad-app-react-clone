import React from 'react';
import { ScrollArea } from '~/components/ui/scroll-area';

import type { CategoryRowListProps } from './types';

import { CategoryRowListCard } from './category-list-cards';

const CategoryRowList = ({ name, slug, icon,courses }: CategoryRowListProps) => {

  return (
    <div className="w-full flex flex-col gap-2 py-3 bg-muted">
      <div className="flex items-center gap-2 py-2 px-5">
        <img src={icon} className="size-10" />
        <h2 className="text-base font-semibold text-foreground capitalize text-left">
          {name}
        </h2>
      </div>
      <ScrollArea className="">
        <div className="w-screen flex items-center gap-5 px-8 overflow-x-scroll py-3 no-scrollbar">
          {courses &&
            courses.map((category) => (
              <CategoryRowListCard key={category.title} {...category} />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryRowList;
