/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-image": "url(/landing bg.jpg)",
        "thought-image": "url(/thought.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        PG: ["Protest Guerrilla", "sans-serif"],
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  plugins: [],
};
