import React from "react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetchJsonData from "../hooks/fetchJsonData";

import { getImgUrl } from "../lib/utils";

interface Props {
  title: string;
  icon: string;
  fileName: string;
}

interface CategoryCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug: string;
  postID: string;
}

const CategoryCard = ({
  name,
  courseInfo,
  icon,
  slug,
  isNested,
  postID,
}: CategoryCardProps) => {
  return (
    <Link
      to={`course/content/:${slug}`}
      state={{
        course: {
          icon,
          name,
          courseInfo,
          isNested,
          slug,
          postID,
        },
      }}
    >
      <Card className="py-5 px-3">
        <div className="p-3 w-[270px]">
          <img src={getImgUrl(icon)} alt={name} className="size-14" />
        </div>
        <div className="">
          <h2 className="text-lg font-bold">{name.replace("&amp;", "&")}</h2>
          <p className="text-xs text-muted-foreground line-clamp-3">
            {courseInfo}
          </p>
        </div>
      </Card>
    </Link>
  );
};

const CategoryRowList = ({ title, fileName, icon }: Props) => {
  const { data: categoryList, error } = useFetchJsonData(fileName);

  return (
    <div className="w-full flex flex-col gap-2 py-3 bg-muted">
      <div className="flex items-center gap-2 py-2 px-5">
        <img src={getImgUrl(icon)} className="size-10" />
        <h2 className="text-base font-semibold text-foreground capitalize text-left">
          {title}
        </h2>
      </div>
      <ScrollArea className="">
        <div className="w-screen flex items-center gap-5 px-8 overflow-x-scroll py-3 no-scrollbar">
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
