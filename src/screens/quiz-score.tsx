import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Button } from "@/components/ui/button";
import { Share, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import check from "../assets/check-2.png";
import falseIcon from "../assets/false.png";
import { quizSuggestions } from "../constants/constant";
import { getSuggestion } from "../lib/utils";

interface QuizScoreProps {
  score: {
    correct: number;
    incorrect: number;
  };
  total: number;
}

const QuizScore = ({ score, total }: QuizScoreProps) => {
  const percentage = (score.correct / total) * 100;

  return (
    <div className="w-full flex flex-col justify-center gap-4">
      <div className="size-[200px] mx-auto mt-20">
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0, // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round", // Text size
            textSize: "16px", // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5, // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',   // Colors
            pathColor: `rgb(66,123,249)`,
            // textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        >
          <div className="flex justify-center items-center text-lg font-bold">
            {percentage.toFixed(1)}%
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="grid grid-cols-2 place-content-center py-5 divide-x-2 divide-red-700 w-full max-w-screen-2xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center gap-2">
            <img src={check} className="size-8" />
            <span className="text-lg font-black">{score.correct}</span>
          </div>
          <span className="text-base font-medium">correct</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <img src={falseIcon} className="size-8" />
            <span className="text-lg font-black">{score.incorrect}</span>
          </div>
          <span className="text-base font-medium">wrong</span>
        </div>
      </div>
      <div className="w-full px-3">
        <div className="w-full text-sm w-full py-4 px-2 border shadow shadow-blue-400 text-center border">
          {getSuggestion(percentage, quizSuggestions)}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button variant="ghost" className="flex items-center gap-1.5">
          <Share /> shared
        </Button>
        <Link to={"/"}>
          <Button variant="link" className="flex items-center gap-1.5">
            <ArrowLeft /> shared
          </Button>
        </Link>
      </div>
    </div>
  );
};

//rgb(37,99,235)
//#60a5fa
export default QuizScore;
