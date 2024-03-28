import { Box, IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";

const ContactChannel = (props: { channelIconSrc: string; alt: string }) => {
	const { channelIconSrc, alt } = props;
	return (
		<Box
			sx={{
				backgroundColor: "primary.main",
				borderRadius: "1000px",
				mx: "0.5rem",
			}}
		>
			<IconButton
				sx={{
					borderRadius: "1000px",
				}}
			>
				<Image
					src={channelIconSrc}
					alt={alt}
					width={0}
					height={0}
					style={{
						width: "1.5rem",
						height: "auto",
					}}
					unoptimized
				/>
			</IconButton>
		</Box>
	);
};

export default ContactChannel;
