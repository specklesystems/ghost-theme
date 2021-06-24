const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./*.hbs", "./partials/**/*.hbs"],
  },
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/2-3": "calc(100vh * 0.66)",
      }),
      typography: (theme) => ({
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.400"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    typography: ["dark"],
    extend: {
      opacity: ["active", "dark"],
      visibility: ["hover", "dark"],
      ringWidth: ["hover", "active"],
      scale: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
