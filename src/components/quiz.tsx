import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useFetchJsonData from "../hooks/fetchJsonData"



interface QuizeCardProps {
  quizNo:number;
  remainQuizNo:number;
  title:string;
  options:{[key:string]:string}[]
}

const QuizCard = ({quizNo,remainQuizNo,title,options}: QuizeCardProps) => {
 
  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-2">
        <h3>Quiz#{1}</h3>
        <h3>Remaining:{19}</h3>
      </div>
     <div className="prose dark:prose-invert">{title}</div>
     <div className="flex flex-col gap-2">
       {options.map((option, index) => (
       <Card key={title}>
         <div className="flex items-center justify-between">
             { Object.keys(option)
             .map((element, index) => (
             <>
            <div className="flex items-center gap-10">
               <p>{element[0]}</p>
               <p>{element[1]}</p>
             </div>
             <input type="checkbox" />
             </>
             ))
             }
         </div>
       </Card>
       ))}
     </div>
    </div>
  );
};

 const Quiz = () => {
   
   const {data:quizzess} = useFetchJsonData("quiz/angular/javascript")
   alert(quizzess)
   ///storage/BA73-022B/React-projects/2023-summer/s-two/src/assets/quiz/angular/javascript.json
  return (
    <div className="w-full border-red-800">
      <Carousel className="w-full">
        <CarouselContent>
          {quizzess && quizzess.map((_, index) => (
            <CarouselItem key={index}>
              <div className="">
          <QuizCard quizNo={index+1} remainQuizNo={quizzess.length} {..._}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default  Quiz;