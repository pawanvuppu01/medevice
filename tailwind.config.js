/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0057B8",
        accentBlue: "#009CDE",
        hoverBlue: "#007BFF",
        backgroundLight: "#F8FAFC",
        textDark: "#1E293B",
        textMuted: "#64748B",
        borderGray: "#E2E8F0",
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
