import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const Logo = () => {
	return (
		<Image
			src="RestcipeLogo.svg"
			alt="Restcipe Logo"
			width={0}
			height={0}
			style={{ width: "10%", height: "auto", minWidth: "150px" }}
		/>
	);
};

export default Logo;
