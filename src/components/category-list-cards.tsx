import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { CategoryColListProps, CategoryColListCardProps } from '../types';
import { getImgUrl } from '../lib/utils';

export const CatagoryCard = ({
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
