/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				gold:'#ffd700',
			},
			fontFamily: {
				sans: ['Source Sans 3', 'sans-serif'],
				serif: ['Playfair Display', 'serif']
			},
			boxShadow: {
				'lg': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 4px 10px -6px rgb(0 0 0 / 0.1)'
			}
		},
	},
	plugins: [],
}