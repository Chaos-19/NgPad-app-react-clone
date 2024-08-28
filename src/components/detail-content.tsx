import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypePrism from 'rehype-prism-plus';
import {
  CopyBlock,
  dracula /*, railscast, monokai,atomOneDark */,
} from 'react-code-blocks';

interface Props {
  content: string;
  lang?: string;
}

const DetailContent = ({ content, lang }: Props) => {
  return (
    <div className="pb-28">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        children={content}
        className="prose dark:prose-invert prose-pre:not-prose prose-pre:p-0 prose-table:break-all prose-table:table-fixed"
        components={{
          code(props) {
            const { children, className, node, parent, ...rest } = props;
            const match = /language-(\w+)/.exec(
              className + lang
                ? `language-${lang.toLowerCase()}`
                : `language-js` || '',
            );

            console.log('......... node codeBlock ......');
            console.log(node);
            console.log(className);

            const content = String(
              Array.isArray(children)
                ? children[1].props.children
                : typeof children == 'object'
                  ? children.props.children
                  : children,
            ).replace(/\n$/, '');

            return (
              children && (
                <CopyBlock
                  text={content}
                  language={
                    ['html', 'css'].includes(lang?.toLowerCase())
                      ? 'html'
                      : 'typescript'
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
