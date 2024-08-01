import React from "react";
import { useLocation,Link } from "react-router-dom";
import { getImgUrl } from "../lib/utils";
import useFetchJsonData from "../hooks/fetchJsonData";

interface Props {}

interface NestedContentCardProps {
  name: React.ReactNode;
  courseInfo: string;
  icon: string;
  slug:string
  isNested:boolean
}

const NestedContentCard = ({name,
  icon,
  courseInfo,
  slug,
  isNested,}: NestedContentCardProps) => {
  return    ( <Link
      to={`course/content/:${slug}`}
      state={{
        course: {
          icon,
          name,
          slug,
          courseInfo,
          isNested,
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
    </Link>)
};



interface RegularContentCardProps {
  name: React.ReactNode;
  index:number
}

const RegularContentCard = (props: RegularContentCardProps) => {
  return (
    <div>
      
    </div>
  );
};


const CourseContent = (props: Props) => {
  const location = useLocation();

  const {
    course: { icon, courseInfo,isNested,slug ,name},
  } = location.state;
  
  let path = isNested?`nested_categories/${slug}`:`posts/${slug}`
  const {data:courseContents} = useFetchJsonData(path)
  

  return (
    <div className="w-full">
      <div className="py-5 mt-3 px-5">
        <img src={getImgUrl(icon)} className="size-16" />
      </div>
      <div className="px-6 py-1">
        <p className="text-muted-foreground text-[13px] font-semibold">
          {courseInfo}
        </p>
      </div>
        {/*isNested?CourseContent.map((element, index) => (
          <NestedContentCard title={element.title} index={index}/>))
          :  {CourseContent.map((element, index) => (
          <RegularContentCard title={element.title} index={index}/>))}*/}
    </div>
  );
};

export default CourseContent;
