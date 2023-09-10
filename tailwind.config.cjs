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


// screens: {
// 	'phone': {'min': '300px', 'max': '640px'},
// 	sm:{'min': '640px', 'max': '768px'},
// 	md:{'min': '768px', 'max': '1280px'},
// 	mdx:{'min':'922px','max':'1280px'} ,
// 	xl:"1280px",
// 	xxl:"1536px",
// 	zxl: "1919px",
// 	smd: "680px",
// 	xs:"320xp",		
// 	ssmm:  {'min': '640px', 'max': '1224px'},
//   },