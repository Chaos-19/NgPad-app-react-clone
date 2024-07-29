import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useFetchJsonData from '../hooks/fetchJsonData';

import { getImgUrl } from '../lib/utils';

interface Props {
  title: string;
  icon: string;
  fileName: string;
}

interface CategoryCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
}

const CategoryCard = ({ name, courseInfo, icon }: CategoryCardProps) => {
  return (
    <Card className="py-5 px-3">
      <div className="p-3 w-[270px]">
        <img src={getImgUrl(icon)} alt={name} className="size-14" />
      </div>
      <div className="">
        <h2 className="text-lg font-bold">{name.replace('&amp;', '&')}</h2>
        <p className="text-xs text-muted-foreground line-clamp-3">
          {courseInfo}
        </p>
      </div>
    </Card>
  );
};

const CategoryRowList = ({ title, fileName, icon }: Props) => {
  const basePath = '../assets/categories/';

  const { data: categoryList, error } = useFetchJsonData(basePath + fileName);

  return (
    <div className="w-full flex flex-col gap-2 py-3 bg-muted">
      <div className="flex items-center gap-2 py-2 px-5">
        <img src={getImgUrl(icon)} className="size-10" />
        <h2 className="text-base font-semibold text-foreground capitalize text-left">
          {title}
        </h2>
      </div>
      <ScrollArea>
        <div className="w-screen flex items-center gap-5 px-8 overflow-x-scroll py-3">
          {categoryList &&
            categoryList.map((category) => (
              <CategoryCard key={category.name} {...category} />
            ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryRowList;
