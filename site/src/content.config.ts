// site/src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		tags: z.array(z.string()),
		cover: image().optional(),
		coverAlt: z.string().optional(),
		linkDemo: z.string().url().optional(),
		linkRepo: z.string().url().optional(),
		lang: z.enum(['fr', 'en']).optional().default('fr'),
	}),
});

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		cover: image().optional(),
		coverAlt: z.string().optional(),
		lang: z.enum(['fr', 'en']).optional().default('fr'),
	}),
});

export const collections = {
	projects,
	blog,
};
