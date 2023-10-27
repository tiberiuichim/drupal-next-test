// See https://ant.design/docs/react/customize-theme

import { Roboto } from "next/font/google";
import colors from "colors";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function theme() {
  return {
    token: {
      fontSize: 16,
      fontFamily: roboto.style.fontFamily,
      colorPrimary: colors["violet-light"],
      // Seed Token
      borderRadius: 2,

      // Alias Token
      colorBgContainer: "#f6ffed",
    },
    components: {
      Button: {
        colorPrimary: "blue",
        algorithm: true, // Enable algorithm
      },
      Input: {
        colorPrimary: "#eb2f96",
        algorithm: true, // Enable algorithm
      },
    },
  };
}
