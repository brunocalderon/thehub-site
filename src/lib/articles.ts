import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";

export type Article = CollectionEntry<"articles">;

export async function getArticles() {
  const articles = await getCollection("articles");
  return articles.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getReadingTime(article: Article) {
  return readingTime(article.body ?? "").text;
}
