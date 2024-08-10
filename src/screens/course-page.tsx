import React from "react";
import { useLocation } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TobBar, DetailContent } from "../components";

interface Props {}

const CoursePage = (props: Props) => {
  const location = useLocation();
  const { courseDetail } = location.state;

  const content = `
  <div class="note">
  ${courseDetail.content.rendered}
  </div>
  `;

  return (
    <section className="overflow-y-hidden border-4 border-green-800">
      <TobBar style="bg-transparent" />
      <ScrollArea>
        <div className="h-[700px] border-2 border-blue-600 w-fit">
          <DetailContent content={content} />
        </div>
      </ScrollArea>
    </section>
  );
};

export default CoursePage;
