import { defineConfig } from "@chakra-ui/react"

export const themeConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        magenta: { value: "#C82964" },
        burgundy: { value: "#801F53" },
        orange: { value: "#EF9752" },
        white: { value: "#ffffff" },
        black: { value: "#000000" },
        secondary: { value: "#d4d3e7" },
        "primary-text": { value: "#334155" },
        "secondary-text": { value: "#808fa4" },
        "light-orange": { value: "#F7CBA8" },
      },
      fonts: {
        heading: { value: "poppins, sans-serif" },
        body: { value: "roboto, sans-serif" },
        mono: { value: "quicksand, sans-serif" },
      },
    },
  },
})
