import React from "react";
import ReactMarkdown, { Options } from "react-markdown";
import RemarkMathPlugin from "remark-math";
import { BlockMath, InlineMath } from "react-katex";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const _mapProps: () => Partial<Options> = () => ({
  skipHtml: false,
  remarkPlugins: [RemarkMathPlugin],
  rehypePlugins: [rehypeKatex],
});

interface MarkdownProps {
  content: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ content }) => (
  <ReactMarkdown {..._mapProps()}>{content}</ReactMarkdown>
);
