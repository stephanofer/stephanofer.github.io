import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    github: z.string(),
    external: z.string(),
    techStack: z.array(z.string()),
  }),
});

export const collections = { projects };
