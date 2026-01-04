import Link from "next/link";

type Article = {
  title: string;
  date: string;
  summary?: string;
  slug: string;
  // Add other fields if needed
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  // Defensive: fallback for missing slug
  const slug = article.slug || "";
  const detailsHref = slug ? `/articles/${slug}` : "#";
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow border border-gray-100 group">
      <div>
        <h2 className="text-xl font-bold text-primary mb-1 group-hover:underline">{article.title}</h2>
        <div className="text-sm text-gray-500 mb-2">{article.date}</div>
        <p className="text-gray-700 mb-2">
          {article.summary ? article.summary : "Read more..."}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Link
          href={detailsHref}
          className="w-full sm:w-auto text-white bg-primary px-4 py-2 rounded hover:bg-primary/90 text-center font-semibold shadow-sm"
          aria-label={`Read full article: ${article.title}`}
        >
          <span>Details</span>
        </Link>
        <Link
          href={detailsHref}
          className="w-full sm:w-auto text-primary border border-primary px-4 py-2 rounded hover:bg-primary/10 text-center font-semibold shadow-sm"
          aria-label={`Read more: ${article.title}`}
          prefetch={false}
          passHref
        >
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
}