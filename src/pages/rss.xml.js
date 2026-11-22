import rss from "@astrojs/rss";
import { getArticles } from "@/lib/articles";

export async function GET(context) {
  const articles = await getArticles();
  return rss({
    title: "Tratto",
    description:
      "Tratto writes about type, interfaces and identity, and the studios behind them.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: `/articles/${article.id}/`,
    })),
  });
}
