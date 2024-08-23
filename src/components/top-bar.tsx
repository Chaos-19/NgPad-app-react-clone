import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { cn } from '../lib/utils';

interface Props {
  style?: string;
}

const TobBar = ({ style }: Props) => {
  const navigate = useNavigate();

  return (
    <header className="w-full">
      <nav
        className={`flex items-center gap-5 p-4 ${
          style ? style : 'bg-[#092032]'
        }`}
      >
        <ArrowLeft
          size={22}
          className={!style ? 'text-white' : ''}
          onClick={() => navigate(-1)}
        />
      </nav>
    </header>
  );
};

export default TobBar;
