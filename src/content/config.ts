import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});
const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    top: z.enum(['1', '2', '3', '4', '5']).optional(),
    type: z.enum(['featured', 'academic', 'personal', 'gamejam']),
    heroImage: z.string().optional(),
    state: z.enum(['active', 'inactive', 'completed']),
    infos: z.record(z.string(), z.string()).optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
    relatedBlogs: z.array(z.string()).optional(), // Add the related blogs field
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'project': projectCollection
}