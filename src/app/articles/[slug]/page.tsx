import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

type ArticleDetailPageProps = {
  params: { slug: string };
};

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "src/data/articles", `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    if (typeof window !== "undefined") {
      // Client-side: log to browser console
      // @ts-ignore
      window.__OPPHUB_DEBUG__ = { slug, filePath };
      // eslint-disable-next-line no-console
      console.error("Article not found", { slug, filePath });
    }
    return <div className="max-w-2xl mx-auto py-8 text-center text-gray-500">Article not found.<br/>Slug: <code>{slug}</code><br/>File: <code>{filePath}</code></div>;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <article className="max-w-3xl mx-auto bg-white/95 p-0 rounded-3xl shadow-2xl mt-12 overflow-hidden border border-blue-100 font-sans">
      <div className="bg-gradient-to-r from-primary to-blue-900 px-10 py-8">
        <Link href="/articles" className="text-primary-contrast hover:underline text-xs mb-3 inline-block opacity-80 tracking-wide">&larr; Back to Articles</Link>
        <h1 className="text-5xl font-black mb-3 text-white leading-tight drop-shadow-xl tracking-tight font-geist-sans">{data.title}</h1>
        <div className="text-blue-100 mb-2 text-base font-medium flex flex-wrap gap-3 items-center">
          <span className="bg-blue-800/40 px-3 py-1 rounded-full font-mono tracking-wider text-xs shadow">{data.date}</span>
          {data.author && <span className="opacity-90 font-semibold italic">&middot; {data.author}</span>}
        </div>
      </div>
      <div className="px-10 py-10 bg-gradient-to-b from-white via-blue-50/60 to-white">
        <div className="prose prose-blue max-w-none text-lg leading-relaxed font-geist-sans prose-headings:mt-10 prose-headings:mb-5 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:mb-6 prose-p:font-normal prose-a:text-blue-700 prose-a:underline hover:prose-a:text-blue-900 prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-xl prose-blockquote:font-medium prose-blockquote:text-blue-900 prose-code:bg-blue-100 prose-code:text-blue-800 prose-code:rounded prose-code:px-2 prose-code:py-1 prose-code:font-mono prose-code:text-base prose-pre:bg-blue-900 prose-pre:text-blue-100 prose-pre:rounded-xl prose-pre:p-4 prose-li:mb-2 prose-li:marker:text-blue-400 prose-strong:text-primary prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:rounded prose-table:bg-blue-50 prose-table:rounded-xl prose-th:bg-blue-200 prose-th:text-blue-900 prose-td:bg-white prose-td:text-blue-900 prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto prose-img:my-6">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
