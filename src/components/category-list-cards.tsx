import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type {
  CategoryColListCardProps,
  CategoryRowListCardProps,
} from '../types';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../lib/utils';

export const CatagoryColListCard = ({
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

export const CategoryRowListCard = ({
  name,
  courseInfo,
  icon,
  slug,
  isNested,
  postID,
}: CategoryRowListCardProps) => {
  return (
    <Link
      to={`course/content/${slug}`}
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
          <h2 className="text-lg font-bold">{name.replace('&amp;', '&')}</h2>
          <p className="text-xs text-muted-foreground line-clamp-3">
            {courseInfo}
          </p>
        </div>
      </Card>
    </Link>
  );
};
