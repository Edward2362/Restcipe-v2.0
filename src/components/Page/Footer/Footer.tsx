import { Box, Divider, IconButton, SxProps, Typography } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import Image from "next/image";
import ContactChannel from "./ContactChannel";

const Footer = (props: { sx?: SxProps }) => {
	const { sx = {} } = props;

	return (
		<Box
			component="footer"
			sx={[
				{
					position: "relative",
					width: 1,
					backgroundImage: "url(HomeBg.png)",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				},
			]}
		>
			<Box
				sx={{
					width: 1,
					height: 1,
					px: "15%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage:
						"linear-gradient(to top ,rgba(251, 251, 251, 0.6), rgba(251, 251, 251, 1), rgba(251, 251, 251, 1))",
					...sx,
				}}
			>
				<Logo width="8rem" />
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						my: "1rem",
					}}
				>
					<ContactChannel
						channelIconSrc="/facebook.png"
						alt="facebook icon"
					/>
					<ContactChannel channelIconSrc="/x.png" alt="x icon" />
					<ContactChannel
						channelIconSrc="/gmail.png"
						alt="gmail icon"
					/>
				</Box>
				<Divider sx={{ width: "10rem" }} variant="middle" />
				<Typography variant="subtitle2" sx={{ my: "1rem" }}>
					© 2023 Restcipe. All rights reserved
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
