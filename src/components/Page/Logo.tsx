import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Logo = (props: { width?: string }) => {
	const { width = null } = props;
	return (
		<Image
			src="RestcipeLogo.svg"
			alt="Restcipe Logo"
			width={0}
			height={0}
			style={{
				width: width ? width : "15%",
				height: "auto",
				minWidth: "100px",
				maxWidth: "200px",
			}}
		/>
	);
};

export default Logo;
