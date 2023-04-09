import { Markdown } from "./components/MarkdownViewer";

export default function Home() {
  const content = `
  Given a **formula** below
  $$
  s = ut + \\frac{1}{2}at^{2}
  $$
  Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$
  `;

  return <Markdown content={content} />;
}
