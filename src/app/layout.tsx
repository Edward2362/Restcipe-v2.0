import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Header from "@/components/Page/Header";

const inter = Inter({ subsets: ["latin"] });

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
				<ThemeRegistry options={{ key: "mui" }}>
					<Header />
					{children}
				</ThemeRegistry>
			</body>
		</html>
	);
}
