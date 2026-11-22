export const topics = [
  {
    id: "type",
    name: "Type",
    description:
      "New typefaces, revivals and the small decisions that make text easy to read.",
    ground: "bg-accent text-white",
  },
  {
    id: "interfaces",
    name: "Interfaces",
    description:
      "Tools, patterns and the screens people spend their days in.",
    ground: "bg-orange text-foreground",
  },
  {
    id: "identity",
    name: "Identity",
    description:
      "Logos, colour systems and the brands that have to work everywhere.",
    ground: "bg-pink text-white",
  },
  {
    id: "studios",
    name: "Studios",
    description:
      "The people behind the work, how they run, and what they say no to.",
    ground: "bg-foreground text-white",
  },
] as const;

export type TopicId = (typeof topics)[number]["id"];

export const topicIds = topics.map((topic) => topic.id) as [
  TopicId,
  ...TopicId[],
];

export function getTopic(id: string) {
  return topics.find((topic) => topic.id === id);
}
