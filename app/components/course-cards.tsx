import { Link } from "react-router";
import { Card,} from "~/components/ui/card";


export const LessonCard= ({
  title,
  index,content
}: {
 title:string;
 content:string;
 index:number;
 object_id: number;
 content_type: number;
 content_type_name: string;
}) => {
  return (
    <Link to={`/${title}`}  state={{
    lesson:content, 
    title
    }}>
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-8  py-1">
          <h2 className="text-lg font-black text-muted-foreground">
            {index < 10 ? `0${index}` : index}.
          </h2>
          <div className="flex flex-col gap-2 py-1.5">
            <h2
              className="text-base text-muted-foreground font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export const SectionCard = ({
  title,icon,description,slug
}: {
  title: string;
  icon: string;
  slug: string;
  description: string;
  course: number;
}) => {
  
  return (
    <Link
      to={`/${title}`}
      >
      <Card className="shadow border drop-shadow backdrop-brightness-100 p-5 py-7">
        <div className="flex items-center gap-5 py-1">
          <img src={(icon)} alt={title} className="size-14" />
          <div className="flex flex-col gap-2 py-1.5">
            <h2
              className="text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <p className="text-xs text-muted-foreground line-clamp-3">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};
