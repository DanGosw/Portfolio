/** @type {import("tailwindcss").Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				animatedGradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" }
				},
				backgroundSize: {
					"300%": "300%"
				},
				animation: {
					gradient: "animatedgradient 6s ease infinite alternate"
				}
			}
		}
	},
	plugins: [
		import("@tailwindcss/aspect-ratio"),
		import("@tailwindcss/forms"),
		import("@tailwindcss/line-clamp"),
		import("@tailwindcss/typography")
	]
};