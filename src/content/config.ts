import { defineCollection, z } from "astro:content";
import { string } from "astro:schema";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        technologies: z.string(),
    })
});

export const collections = { projects };