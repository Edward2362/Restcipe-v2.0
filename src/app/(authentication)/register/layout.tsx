import LeftLayout from "@/components/Page/Authentication/LeftLayout";
import type { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "@/components/Page/Logo";
import RightLayout from "@/components/Page/Authentication/RightLayout";

export const metadata: Metadata = {
	title: "Restcipe | Register",
	description: "Restcipe register page",
};

export default function LoginLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<LeftLayout>
				<Logo dark width="60%" />
				<Box sx={{ mt: "0.25rem", padding: "0 2rem" }}>
					<Typography
						textAlign={"center"}
						fontWeight={"700"}
						fontSize={"2em"}
					>
						Welcome to Restcipe!
					</Typography>
					<Typography textAlign={"center"} fontSize={"1.5em"}>
						Let&apos;s get you registered and cooking up some tasty
						adventures!
					</Typography>
				</Box>
			</LeftLayout>
			<RightLayout>{children}</RightLayout>
		</>
	);
}
