// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()),
		cover: image().optional(), 
		coverAlt: z.string().optional(),
		linkDemo: z.string().url().optional(),
		linkRepo: z.string().url().optional(),
	}),
});

const blogCollection = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		cover: image().optional(),
		coverAlt: z.string().optional(),
	}),
});

export const collections = {
	'projects': projectsCollection,
	'blog': blogCollection,
};
