// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://spectralwiz.github.io",
	base: "/prisma",
	integrations: [
		starlight({
			title: 'Prisma',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/spectralwiz/prisma' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
