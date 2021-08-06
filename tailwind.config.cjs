const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			teal: colors.teal,
			white: colors.white,
			gray: colors.blueGray,
			red: colors.red,
			yellow: colors.amber,
			blue: colors.blue
		},
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
