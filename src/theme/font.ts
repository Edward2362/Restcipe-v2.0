import { Grandiflora_One, Roboto } from "next/font/google";

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
	adjustFontFallback: false,
});
