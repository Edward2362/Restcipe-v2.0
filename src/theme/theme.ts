import { Grandiflora_One, Roboto } from "next/font/google";
import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

export const grandifloraOne = Grandiflora_One({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	adjustFontFallback: false,
});

export const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

let theme: Theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
		h1: { fontFamily: grandifloraOne.style.fontFamily },
	},
	palette: {
		mode: "light",
		primary: {
			main: "#FFBA08",
			contrastText: "#370617",
		},
		secondary: {
			main: "#9D0208",
			contrastText: "#FBFBFB",
		},
		text: {
			primary: "#370617",
		},
		background: {
			paper: "#FBFBFB",
			default: "#FBFBFB",
		},
		divider: "#9D0208",
	},
});

theme = responsiveFontSizes(theme);

export default theme;
