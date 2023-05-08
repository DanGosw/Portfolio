/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/**.{vue,js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
