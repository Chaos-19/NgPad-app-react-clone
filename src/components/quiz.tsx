import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import QuizScore from "../screens/quiz-score";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { loadData } from "../lib/utils";

interface QuizeCardProps {
  quizNo: number;
  remainQuizNo: number;
  title: string;
  options: { [key: string]: string }[];
  correct: string;
  scroll: (choice: string, correct: string) => void;
}

const QuizCard = ({
  quizNo,
  remainQuizNo,
  title,
  options,
  scroll,
  correct,
}: QuizeCardProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-between py-2 px-1.5">
        <h3>Quiz#{quizNo}</h3>
        <h3>Remaining:{remainQuizNo}</h3>
      </div>
      <div className="prose dark:prose-invert p-2 text-wrap">{title}</div>
      <div className="flex flex-col gap-2 px-1">
        {Object.entries(options).map((option, index) => (
          <Card key={title} className="shadow p-1.5">
            <div className="flex items-center justify-between py-2 px-1">
              <div className="flex items-center gap-4">
                <p className="text-base capitalize">{option[0]}.</p>
                <p>{option[1]}</p>
              </div>
              <Checkbox
                id={option[0]}
                onClick={() => scroll(option[0].toUpperCase(), correct)}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export async function loader({ params }) {
  const data = await loadData(`quiz/angular/${params.slug}`);
  return { data };
}

const Quiz = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [choice, setChoice] = useState<{ [key: number | string]: string }[]>(
    []
  );
  const [questionNo, setQuestionNo] = useState<number>(1);
  const [score, setScore] = useState<number>(0);

  const { data: quizzess } = useLoaderData();

  const handleNextClick = (userChoice: string, correct: string) => {
    if (api) {
      if (!api.canScrollNext()) {
      }
      setChoice([...choice, { [questionNo]: userChoice, correct }]);
      setQuestionNo(questionNo + 1);
      setTimeout(() => api.scrollNext(), 300);
      setScore(
        choice.filter(
          (val: any, index: string) => val[`${index + 1}`] == val["correct"]
        ).length
      );
    }
  };

  return (
    <div className="w-[calc(100vw_-_1px)]">
      <Carousel opts={{ watchDrag: false, align: "start" }} setApi={setApi}>
        <CarouselContent>
          {quizzess && (
            <>
              {quizzess.map((_, index) => (
                <CarouselItem key={index}>
                  <div className="">
                    <QuizCard
                      quizNo={index + 1}
                      remainQuizNo={quizzess.length - (index + 1)}
                      scroll={handleNextClick}
                      {..._}
                    />
                  </div>
                </CarouselItem>
              ))}
              <CarouselItem key={"end-index"}>
                {/*     <div cclassName="flex justify-center items-center ">
                  <h2>End of Question</h2>
                  <p>{JSON.stringify(choice)}</p>
                  <p>{score}</p>
                </div>*/}
                {<QuizScore />}
              </CarouselItem>
            </>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Quiz;
