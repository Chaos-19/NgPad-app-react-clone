import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
//import rehypePrism from "rehype-prism-plus";
import {
  CopyBlock,
  dracula /*, railscast, monokai,atomOneDark */,
} from "react-code-blocks";

import { useContext } from "react"



interface Props {
  content: string;
  lang?: string;
}

export default function LessonContent({ content, lang }: Props){
  
  const { courseContent } = useContext(CourseContext);
  
  
  return (
    <div className="pb-28 w-full">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content
          .replace(/<code\b[^>]*?>content_copy<code\b[^>]*?>/gs, "<code>")
          .replace(/<\/code><\/code><\/pre>/gs, "</code></pre>")
          .replace(
            /(?<!<pre[^>]*?>[^<]*?)(<code\b[^>]*?>.*?<\/code>)(?![^<]*?<\/pre>)/gs,
            (match) => {
              const content = match.match(/<code\b[^>]*?>(.*?)<\/code>/);

              return `<b>${content && content[1]}</b>`;
            }
          )}
        className="prose dark:prose-invert prose-pre:not-prose prose-pre:p-0 prose-table:break-all prose-table:table-fixed max-w-[92vw]"
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(
              className + lang
                ? `language-${lang.toLowerCase()}`
                : `language-js` || ""
            );

            console.log("children");
            console.log(children);

            const content = Array.isArray(children)
              ? children
              : typeof children == "object"
              ? children?.props.children
              : children;

            return (
              children && (
                <CopyBlock
                  text={content}
                  language={
                    ["html", "css"].some(v=> courseContent?.title.toLowerCase().includes(v))
                      ? "html"
                      : "typescript"
                  }
                  codeBlock
                  theme={dracula}
                />
              )
            );
          },
        }}
      />
    </div>
  );
};
