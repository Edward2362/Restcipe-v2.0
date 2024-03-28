import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = (props: { width?: string }) => {
	const { width = null } = props;
	return (
		<Link
			style={{
				width: width ? width : "15%",
				height: "auto",
				display: "inline-flex",
			}}
			href={"/"}
		>
			<Image
				src="RestcipeLogo.svg"
				alt="Restcipe Logo"
				width={0}
				height={0}
				style={{
					width: "100%",
					height: "auto",
					minWidth: "100px",
					maxWidth: "200px",
				}}
			/>
		</Link>
	);
};

export default Logo;
