import ArticleCard from "@/components/ArticleCard";
import { getAllArticlesMeta } from "@/lib/articles";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();

  const results = query
    ? getAllArticlesMeta().filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query),
      )
    : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8 border-b border-border pb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Search
        </p>
        <h1 className="font-display mt-2 text-3xl font-black text-foreground sm:text-4xl">
          {query ? `Results for "${q}"` : "Search Garden State Digest"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          {query
            ? `${results.length} article${results.length === 1 ? "" : "s"} found.`
            : "Enter a keyword above to search articles by title or excerpt."}
        </p>
      </header>

      {query && results.length === 0 ? (
        <p className="text-muted">
          No articles matched your search. Try a different keyword.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
