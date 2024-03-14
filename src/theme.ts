import { extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/montserrat";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        backgroundColor: "Ghost white",
      },
    },
  },
  fonts: {
    heading: `'Montserrat Variable', sans-serif`,
    body: `'Montserrat Variable', sans-serif`,
  },
  colors: {
    Black: "#000000",
    Thistle: "#c7b9c8",
    "Dark purple": "#291528",
    "Black olive": "#3a3e3b",
    "Ghost white": "#f0eff4",
    "Mountbatten pink": "#9e829c",
  },
});
