/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				person: "#511f50",
				rating: "#f7f2f8",
				dark: "#854273",
				darkest: "#4e204f",
				medium: "#ecd8ec",
				light: "#f8ddf8",
				greyish: "aba4ab",
			},
			fontFamily: {
				sans: "Spartan, sans-serif",
			},
		},
	},
	plugins: [],
};
