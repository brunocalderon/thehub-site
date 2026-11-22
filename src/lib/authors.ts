import { getCollection } from "astro:content";
import { getArticles, type Article } from "@/lib/articles";

export async function getEditors() {
  const articles = await getArticles();
  return (await getCollection("authors"))
    .sort((a, b) => a.data.name.localeCompare(b.data.name))
    .map((author) => ({
      author,
      count: getAuthorArticles(articles, author.id).length,
    }));
}

export function getAuthorArticles(articles: Article[], authorId: string) {
  return articles.filter((article) => article.data.author.id === authorId);
}
