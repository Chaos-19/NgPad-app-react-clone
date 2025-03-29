import { useLocation } from "react-router";
import { LessonContent } from "~/components";
import { Bookmark } from "lucide-react";



export default function Lesson(){
  const location = useLocation();
  const { lesson, title } = location.state;

  const content = `
  <div class="note" className="!w-full">
  ${lesson}
  </div>
  `;

  return (
        <div className="h-[calc(100vh_-_80px)] max-w-[92vw] mx-auto flex flex-col gap-5">
          <div className="mx-2 flex items-center justify-between pt-24 pb-5 border-b-2 border-border gap-7">
            <h2
              className="text-xl font-bold break-words pr-2"
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            <Bookmark />
          </div>
          <LessonContent content={content}/>
        </div>
  );
};
