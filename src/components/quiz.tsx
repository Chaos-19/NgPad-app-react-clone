import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useFetchJsonData from "../hooks/fetchJsonData";

interface QuizeCardProps {
  quizNo: number;
  remainQuizNo: number;
  title: string;
  options: { [key: string]: string }[];
}

const QuizCard = ({ quizNo, remainQuizNo, title, options }: QuizeCardProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-2">
        <h3>Quiz#{quizNo}</h3>
        <h3>Remaining:{remainQuizNo}</h3>
      </div>
      <div className="prose dark:prose-invert">{title}</div>
      <div className="flex flex-col gap-2">
        {Object.entries(options).map((option, index) => (
          <Card key={title}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <p>{option[0]}</p>
                <p>{option[1]}</p>
              </div>
              <input type="checkbox" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Quiz = () => {
  const { data: quizzess } = useFetchJsonData("quiz/angular/javascript");

  return (
    <div className="w-[calc(100vw_-_1px)]">
      <Carousel opts={{ watchDrag: false, align: "start" }}>
        <CarouselContent>
          {quizzess &&
            quizzess.map((_, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <QuizCard
                    quizNo={index + 1}
                    remainQuizNo={quizzess.length}
                    {..._}
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Quiz;
