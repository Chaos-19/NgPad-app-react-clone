import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TobBar, DetailContent } from "../components";
import { Bookmark } from "lucide-react";

interface Props {}

const CoursePage = (props: Props) => {
  const location = useLocation();
  const { courseDetail, lang } = location.state;

  const content = `
  <div class="note" className="!w-full">
  ${courseDetail.content.rendered}
  </div>
  `;

  return (
    <section className="overflow-y-hidden">
      <TobBar style="bg-white-0 bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-0 z-50 fixed top-0 inset-x-0" />
      <ScrollArea>
        <div className="h-[calc(100vh_-_80px)] max-w-[92vw] mx-auto flex flex-col gap-5">
          <div className="mx-2 flex items-center justify-between pt-24 pb-5 border-b-2 border-border gap-7">
            <h2
              className="text-xl font-bold break-words pr-2"
              dangerouslySetInnerHTML={{ __html: courseDetail.title.rendered }}
            ></h2>
            <Bookmark />
          </div>
          <DetailContent content={content} lang={lang} />
        </div>
      </ScrollArea>
    </section>
  );
};

export default CoursePage;
