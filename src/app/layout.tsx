import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Page/Header";

export const metadata: Metadata = {
	title: "Restcipe",
	description: "Restcipe homepage",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<Header />
					{children}
				</ThemeRegistry>
			</body>
		</html>
	);
}
