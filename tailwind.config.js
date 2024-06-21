/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      colors:{
        primary: "rgb(20, 87, 211)",
        darkBg: "rgb(15, 15, 15)",
        lightBg: "rgb(238, 238, 238)",
        darkShade: "rgb(20, 20, 20)"
      },
      class:{
        active: "bg-primary",
        sectionH1: "font-bold text-zinc-700"
      }
    },
    
  },
  darkMode: ["class"],
=======
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
>>>>>>> 9934ae0 (Initial commit from Create Next App)
  plugins: [],
};
