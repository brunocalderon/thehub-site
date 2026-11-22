import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { topicIds } from "@/lib/topics";

const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    page: z.string(),
    pubDate: z.coerce.date(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      portrait: z.object({
        url: image(),
        alt: z.string(),
      }),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      author: reference("authors"),
      cover: z.object({
        url: image(),
        alt: z.string(),
      }),
      topics: z.array(z.enum(topicIds)),
      isFeatured: z.boolean().default(false),
      isMembersOnly: z.boolean().default(false),
    }),
});

export const collections = {
  authors,
  legal,
  articles,
};
