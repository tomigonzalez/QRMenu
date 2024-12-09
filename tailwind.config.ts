// eslint-disable-next-line prettier/prettier
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        "three-corners": "20px 20px 0 20px ", // Personaliza el radio de las esquinas
      },
    },
  },
  plugins: [],
};

export default config;
