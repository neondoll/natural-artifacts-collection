/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        /* background: "#1d2f30", */
        /* "green-active": "#688b05", */
        /* "green-focus": "#83a440", */
        /* grey: "#899d9d", */
        /* "primary-green": "#bae249", */
        /* white: "#ffffff", */
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
