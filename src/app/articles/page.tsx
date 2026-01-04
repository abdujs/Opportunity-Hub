import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleCard from "../../components/ArticleCard";

export default function ArticlesPage() {
  const articlesDir = path.join(process.cwd(), "src/data/articles");
  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith(".md"));
  const articles = files.map(filename => {
    const filePath = path.join(articlesDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    // Extract summary: first non-empty, non-heading, non-frontmatter line, and not matching the slug
    const slug = filename.replace(/\.md$/, "");
    const summary =
      content
        .split("\n")
        .map(line => line.trim())
        .find(line => line.length > 0 && !/^#|^\*|^---/.test(line) && line.toLowerCase() !== slug.toLowerCase()) || "Read more...";

    return {
      slug,
      title: typeof data.title === "string" ? data.title.replace(/^\*+|\*+$/g, '').replace(/^#+\s*/, '').trim() : "Untitled",
      date: data.date || "",
      summary,
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-primary">Career Articles</h1>
      {articles.length === 0 ? (
        <div className="text-gray-500">No articles found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
