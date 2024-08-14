import React from "react";
import quiz from "../../assets/quiz.json";
import Lottie from "lottie-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import QuizList from "../../components/quiz-list";

import quizLists from "../../assets/quiz/angular/all_quiz";

interface Props {
  // Define your props here
}

const QuizPage = (props: Props) => {
  return (
    <div className="flex flex-col">
      <Lottie animationData={quiz} loop={true} className="size-[80%] mx-auto" />
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="">
        <QuizList quizList={quizLists} />
      </div>
    </div>
  );
};

export default QuizPage;
