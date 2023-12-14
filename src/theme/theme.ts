import { Grandiflora_One, Roboto } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const grandifloraOne = Grandiflora_One({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme: ThemeOptions = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
		h1: { fontFamily: grandifloraOne.style.fontFamily },
	},
	palette: {
		mode: "light",
		primary: {
			main: "#9d0208",
		},
		secondary: {
			main: "#FFBA08",
			contrastText: "#370617",
		},
		text: {
			primary: "#370617",
		},
		divider: "#370617",
	},
});

export default theme;
