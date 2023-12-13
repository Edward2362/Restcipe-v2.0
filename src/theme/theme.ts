import { Roboto } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme: ThemeOptions = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	palette: {
		background: {
			default: "#fff",
		},
		mode: "light",
		primary: {
			main: "#FFF",
		},
		secondary: {
			main: "#f6be5c",
		},
	},
});

export default theme;
