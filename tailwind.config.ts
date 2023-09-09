import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppins: ["Nunito", "sans-serif"],
        lora: ["Lora", "sans-serif"],
      },
      colors: {
        // primary
        "primary-900": "#6B1915",
        "primary-700": "#A14B38",
        "primary-500": "#E09370",
        "primary-300": "#F5CCAB",
        "primary-200": "#FBE3C9",
        "primary-100": "#FDF2E4",
        //secondary
        "secondary-900": "#15396B",
        "secondary-700": "#3872A1",
        "secondary-500": "#70BDE0",
        "secondary-300": "#ABE8F5",
        "secondary-200": "#C9F6FB",
        "secondary-100": "#E4FCFD",
        // neutral
        "neutral-900": "#12070B",
        "neutral-700": "#1B1314",
        "neutral-500": "#262626",
        "neutral-300": "#BDBDBD",
        "neutral-200": "#E9E9E9",
        "neutral-100": "#F4F4F4",
        // background
        "background-900": "#E6E6E6",
        "background-700": "#EBEBEB",
        "background-500": "#EEEEEE",
        "background-300": "#F3F3F3",
        "background-200": "#F8F8F8",
        "background-100": "#FDFDFD",
        // success
        "success-900": "#095A3C",
        "success-700": "#188749",
        "success-500": "#31BC53",
        "success-300": "#82EA88",
        "success-200": "#B2F8AE",
        "success-100": "#DBFBD6",
        // info
        "info-900": "#102A7A",
        "info-700": "#2A59B7",
        "info-500": "#7EB9FF",
        "info-300": "#98CBFF",
        "info-200": "#BADFFF",
        "info-100": "#DCF0FF",
        // warning
        "warning-900": "#7A4E0B",
        "warning-700": "#B7831E",
        "warning-500": "#FFC83D",
        "warning-300": "#FFE48A",
        "warning-200": "#FFEFB1",
        "warning-100": "#FFF8D8",
        // danger
        "danger-900": "#7A0922",
        "danger-700": "#B71821",
        "danger-500": "#FF4530",
        "danger-300": "#FFA382",
        "danger-200": "#FFC8AC",
        "danger-100": "#FFE7D5",
      },
    },
  },
  plugins: [],
} satisfies Config;
