// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://spectralwiz.github.io",
	base: "/Prisma",
	integrations: [
		starlight({
			title: 'Prisma',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/spectralwiz/prisma' }],
			sidebar: [
				{
					label: 'API',
					items: [
						{ label: 'Types', slug: 'api/types' },
						{ label: 'Prisma', slug: 'api/prisma' },
						{ label: 'Emitter', slug: 'api/emitter' },
						{ label: 'Particle', slug: 'api/particle' },
						{ label: 'Force', slug: 'api/force' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
