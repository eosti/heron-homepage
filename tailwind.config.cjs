/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        fontFamily: {
            'display': ['jost'],
            // CHANGE THIS TO ONE OF THE TYPEWRITER FONTS
            'body': ['Routed Gothic'],
        },
		extend: {},
	},
	plugins: [],
}
