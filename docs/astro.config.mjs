// @ts-check
import { defineConfig } from 'astro/config';
import { sidebarTopics } from './sidebar.topics';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightKbd from 'starlight-kbd'
import starlightImageZoom from 'starlight-image-zoom'
import starlightLinksValidator from 'starlight-links-validator'
import starlightScrollToTop from 'starlight-scroll-to-top'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	site: 'https://ievangelist.github.io/',
	base: `aspire`,
	integrations: [
		mermaid({
			theme: 'forest',
			autoTheme: true,
			iconPacks: [
				{
					name: 'logos',
					loader: () => fetch('https://unpkg.com/@iconify-json/logos@1/icons.json').then(res => res.json())
				},
				{
					name: 'iconoir',
					loader: () => fetch('https://unpkg.com/@iconify-json/iconoir@1/icons.json').then(res => res.json())
				}
			]
		}),
		starlight({
			title: 'Aspire',
			logo: {
				src: './src/assets/dotnet-aspire-logo-32.svg'
			},
			editLink: {
				baseUrl: 'https://github.com/dotnet/aspire/edit/main/',
			},
			favicon: 'favicon.svg',
			head: [
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', href: 'favicon-96x96.png', sizes: '96x96' } },
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' } },
				{ tag: 'link', attrs: { rel: 'shortcut icon', href: 'favicon.ico' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' } },
				{ tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'Aspire' } },
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/dotnet/aspire'
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.com/invite/raNPcaaSj8'
				},
				{
					icon: 'x.com',
					label: 'X',
					href: 'https://x.com/aspiredotdev'
				},
				{
					icon: 'blueSky',
					label: 'BlueSky',
					href: 'https://bsky.app/profile/dot.net'
				},
				{
					icon: 'youtube',
					label: 'YouTube',
					href: 'https://www.youtube.com/@aspiredotdev'
				},
				{
					icon: 'twitch',
					label: 'Twitch',
					href: 'https://www.twitch.tv/aspiredotdev'
				}
			],
			customCss: [
				'./src/styles/site.css',
				'@fontsource-variable/outfit'
			],
			components: {
				ContentPanel: './src/components/starlight/ContentPanel.astro',
				SocialIcons: './src/components/starlight/SocialIcons.astro',
				Search: './src/components/starlight/Search.astro',
				Footer: './src/components/starlight/Footer.astro',
				MarkdownContent: './src/components/starlight/MarkdownContent.astro',
			},
			expressiveCode: {
				/* TODO: decide which themes we want
				   https://expressive-code.com/guides/themes/#using-bundled-themes
				*/
				//themes: ['dark-plus', 'light-plus'],
				themes: ['laserwave', 'slack-ochin'],
				styleOverrides: { borderRadius: '0.5rem', codeFontSize: '1rem' },
			},
			plugins: [
				catppuccin(),
				starlightSidebarTopics(sidebarTopics),
				starlightLinksValidator({
					exclude: ['#', '/'],
					errorOnRelativeLinks: false
				}),
				starlightScrollToTop({
					// https://frostybee.github.io/starlight-scroll-to-top/svg-paths/
					svgPath: 'M4 16L12 8L20 16',
					showTooltip: true,
					threshold: 10
				}),
				starlightLlmsTxt({
					projectName: 'Aspire',
					description: 'Aspire is a polyglot local dev-time orchestration tool chain for building, running, debugging, and deploying distributed applications.',
				}),
				starlightImageZoom({
					showCaptions: true
				}),
				starlightKbd({
					types: [
						{ id: 'mac', label: 'macOS' },
						{ id: 'windows', label: 'Windows', default: true },
						{ id: 'linux', label: 'Linux' },
					],
				}),
			],
		}),
	],
});
