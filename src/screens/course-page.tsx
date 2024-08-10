import React from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TobBar, DetailContent } from "../components";

interface Props {}

const CoursePage = (props: Props) => {
  const location = useLocation();
  const { courseDetail } = location.state;

  const content = `
  <div class="note" className="">
  ${courseDetail.content.rendered}
  </div>
  `;

  return (
    <section className="overflow-y-hidden">
      <TobBar style="bg-transparent" />
      <ScrollArea>
        <div className="h-[700px] max-w-[96vw] mx-auto">
          <DetailContent content={content} />
        </div>
      </ScrollArea>
    </section>
  );
};

export default CoursePage;
