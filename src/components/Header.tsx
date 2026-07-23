import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 py-5 sm:py-6 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="font-display text-4xl font-black leading-none tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Garden State <span className="text-accent">Digest</span>
            </span>
          </Link>

          <form
            action="/search"
            method="GET"
            className="flex w-full max-w-xs items-center gap-2 md:w-auto"
          >
            <input
              type="search"
              name="q"
              placeholder="Search articles…"
              aria-label="Search articles"
              className="w-full rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Search
            </button>
          </form>
        </div>

        <nav className="flex items-center gap-5 overflow-x-auto border-t border-border py-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="shrink-0 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
