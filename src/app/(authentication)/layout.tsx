import type { Metadata } from "next";
import "../globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Page/Header/Header";
import Footer from "@/components/Page/Footer/Footer";

export const metadata: Metadata = {
	title: "Restcipe",
	description: "Restcipe homepage",
};

export default function RootAuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					{/* <Header /> */}
					{children}
					<Footer />
				</ThemeRegistry>
			</body>
		</html>
	);
}
