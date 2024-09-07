import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";
import {
  CopyBlock,
  dracula /*, railscast, monokai,atomOneDark */,
} from "react-code-blocks";

interface Props {
  content: string;
  lang?: string;
}

const DetailContent = ({ content, lang }: Props) => {
  console.log(content);
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
              : children; /*
            
            Array.isArray(children)?children:children?.props.children
            String(
              Array.isArray(children)
                ? children[1] && typeof children[1]?.props.children == "object"
                  ? children[1] && children[1]?.props.children.props.children
                  : children[1]?.props.children
                : typeof children == "object"
                ? children?.props.children
                : children
            ).replace(/\n$/, "")*/

            return (
              children && (
                <CopyBlock
                  text={content}
                  language={
                    ["html", "css"].includes(lang?.toLowerCase())
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

export default DetailContent;
