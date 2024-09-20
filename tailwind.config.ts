// tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        "3xl": "2200px", // 3x large screens
        sm: "450px", // 3x large screens
        "max-sm": { max: "450px" },
        "max-md": { max: "768px" },
        // You can redefine existing breakpoints if needed
        // 'md': '900px', // This would override the default `md`
      },
      boxShadow: {
        custom:
          "-5px 5px 8px rgba(0, 0, 0, 0.15),  5px -5px 8px rgba(0, 0, 0, 0.15)",
      },
      fontSize: {
        xs: "12px", // Extra small
        sm: "14px", // Small
        base: "16px", // Base size
        lg: "18px", // Large
        xl: "20px", // Extra large
        "2xl": "24px", // 2x large
        "3xl": "30px", // 3x large
        "4xl": "36px", // 4x large
        "5xl": "48px", // 5x large
        // Add more custom font sizes if needed
      },
      // Other custom styles
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#7B61FF",
          secondary: "#0a84ff",
          accent: "#ff9500",
          neutral: "#1e1e1e",
          "base-100": "#000000",
          "base-200": "#0b0d0e",
          "base-300": "#171a1c",
          info: "#3abff8",
          success: "#042f04",
          warning: "#fbbd23",
          error: "#430a0a",
          bdsec: "#21214F",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#21214F",
          secondary: "#ed1a3b",
          accent: "#ff9500",
        },
      },
    ],
  },
};
