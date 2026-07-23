import type { CategorySlug } from "@/types/article";

export interface Category {
  slug: CategorySlug;
  name: string;
  /** Short blurb used in the footer and category headers */
  tagline: string;
  /** Tailwind utility classes used for the category's accent badge */
  badgeClass: string;
}

/**
 * Order here is intentional and drives the homepage section order and nav.
 * Each section gets a distinct hue drawn from the Garden State palette
 * (pine green, coastal navy, warm gold) plus two complementary accents
 * for scannability across five sections.
 */
export const CATEGORIES: Category[] = [
  {
    slug: "education",
    name: "Education",
    tagline:
      "Princeton, Rutgers, and the schools shaping New Jersey's next generation.",
    badgeClass: "bg-[#1b3a5c]/10 text-[#1b3a5c]",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    tagline:
      "Hospitals, health systems, and the science keeping the Garden State well.",
    badgeClass: "bg-[#0f6b42]/10 text-[#0f6b42]",
  },
  {
    slug: "business-leaders",
    name: "Business Leaders",
    tagline: "The entrepreneurs and executives driving New Jersey forward.",
    badgeClass: "bg-[#c9932c]/15 text-[#8a611a]",
  },
  {
    slug: "finance-economy",
    name: "Finance & Economy",
    tagline:
      "Markets, real estate, and the economic pulse of Newark and Jersey City.",
    badgeClass: "bg-teal-600/10 text-teal-700",
  },
  {
    slug: "beauty-wellness",
    name: "Beauty & Wellness",
    tagline:
      "Spas, self-care, and the wellness rituals trending from Hoboken to Atlantic City.",
    badgeClass: "bg-rose-500/10 text-rose-700",
  },
];

export function getCategoryName(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

export function getCategoryBadgeClass(slug: string): string {
  return (
    CATEGORIES.find((c) => c.slug === slug)?.badgeClass ??
    "bg-slate-500/10 text-slate-700"
  );
}
