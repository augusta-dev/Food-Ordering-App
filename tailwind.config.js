const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		// ...
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,html,ttf}", "./src/**/*.{js,ts,jsx,tsx,html,ttf}"
	],
	theme: {
		extend: {
			fontFamily: {
				cormorant: "Cormorant Garamond",
				cormorantItalic: "Cormorant Italic",
				rasa: "Rasa",
				sofia: "Princess Sofia",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
