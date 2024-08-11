import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CopyBlock, dracula, railscast, monokai } from "react-code-blocks";

interface Props {
  content: string;
  lang?: string;
}

const DetailContent = ({ content, lang }: Props) => {
  return (
    <div className="">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
        className="prose dark:prose-invert prose-pre:not-prose prose-pre:p-0 prose-table:break-all prose-table:table-fixed"
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(
              className + lang
                ? `language-${lang.toLowerCase()}`
                : `language-js` || ""
            );

            return (
              <CopyBlock
                text={String(
                  typeof children == "object"
                    ? children.props.children
                    : children
                ).replace(/\n$/, "")}
                language={
                  ["html", "css"].includes(lang.toLowerCase())
                    ? "html"
                    : "typescript"
                }
                codeBlock
                theme={dracula}
              />
            );
          },
        }}
      />
    </div>
  );
};
/*components={{
// Override code block rendering with custom component 
code({ children }) { 
  const language = children[0].props.className.split('-')[1]; 
  // Extract language from class 
  return (
  <pre className={`language-${language}`}>
  <code>{children[1]}</code> </pre>
  ); }, }}
  
  
  components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={dark}
              />
            ) : (
              <code {...rest} className={className}>
                {" "}
                {children}{" "}
              </code>
            );
          },
        }}
  */
export default DetailContent;
