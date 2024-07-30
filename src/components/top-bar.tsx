import React from "react";
import {useNavigate} from "react-router-dom"
import { ArrowLeft } from "lucide-react";

interface Props {
  style?: string;
}

const TobBar = (props: Props) => {
  
  const navigate = useNavigate();
  
  return (
    <header className="w-full">
      <nav className="flex items-center gap-5 py-4 bg-[#092032] px-4">
        <ArrowLeft size={22} 
        color="white" 
        onClick={()=> navigate(-1)}/>
      </nav>
    </header>
  );
};

export default TobBar;
