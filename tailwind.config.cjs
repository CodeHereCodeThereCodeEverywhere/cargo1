/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', '"Inter"', 'sans-serif'],
			space: ['"Space Grotesk"', 'sans'],
			hanken: ['Hanken Grotesk', "'Hanken Grotesk'", 'sans-serif'],
		  },
		extend: {
			colors: {
				'base-black': '#202020',
				'base-white':'#FFF',
				'base-neutral': '#F0F5F4',
				'base-blue':'#01303A',
				'base-green': '#01303A',
				'base-text': '#01303A',
			  },
		},
	},
	plugins: [],
}
