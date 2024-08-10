import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism' 


interface Props {
  content: string;
}

const DetailContent = ({ content }: Props) => {
  return (
    <div className="">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
        className="prose dark:prose-invert prose-code:w-min"
    
    components={{ 
    code(props) { 
    const {children, className, node, ...rest} = props
    const match = /language-(\w+)/.exec(className || '') 
    return match ? ( 
    <SyntaxHighlighter {...rest}
    PreTag="div" 
    children={String(children).replace(/\n$/, '')}
    language={match[1]} style={dark} /> ) :
    ( <code {...rest} className={className}> {children} </code> ) 
      
    } }}
    
      />
    </div>
  );
};

export default DetailContent;
