const defaultTheme = require('tailwindcss/defaultTheme');

// tailwind.config.js
module.exports = {
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: 'media',

	theme: {
		extend: {
			colors: {
				ruby: {
					50: '#FFD1BF',
					100: '#FFBEA6',
					200: '#FFA280',
					300: '#FF6126',
					400: '#FF4500',
				},
			},
			screens: {
				sm: '320px',
				t:'600px',
				md: '768px',
			},
			fontSize: {
				'sm': ['18px', '28px'],
				'base': ['21px', '32px'],
				'10xl': ['10rem', '1'],
				'11xl': ['12rem', '1'],
				'12xl': ['14rem', '1'],
			},
		},

		fontFamily: {
			sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
			serif: ['Charter', ...defaultTheme.fontFamily.serif],
		},
	},
};
