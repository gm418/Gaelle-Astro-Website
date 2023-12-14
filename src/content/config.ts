// 1. Import utilities from astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define my collection + its `type` and `schema`
const portfolioCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        techs: z.string(),
        images: z.array(
            z.object({
                src: image(),
                alt: z.string()
            })
        )
    })
});

// 3. Export a single `collections` object to register my collection
export const collections = {
    'portfolio': portfolioCollection,
};
