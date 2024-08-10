import React from "react";
import ReactMarkdown from 'react-markdown' 
import rehypeRaw from 'rehype-raw' 


interface Props {
content:string
}

const DetailContent = ({content}: Props) => {

  return (
    <div
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} className="prose dark:prose-invert max-w-none prose-slate"escapeHtml={false}/>
      </div>
  );
};

export default DetailContent;
