"use client";

import React, { useEffect } from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Paper } from "@mui/material";

const ElevationScroll = (props: { children: React.ReactElement }) => {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 50,
	});

	return (
		<Paper
			component="header"
			sx={{
				mx: "15%",
				my: "0.5rem",
				py: "0.5rem",
				px: "1.5rem",
				position: "fixed",
				top: 0,
				right: 0,
				left: 0,
				borderRadius: 100,
				backgroundColor: trigger ? "#FBFBFB" : "transparent",
				transition: "all 0.2s ease-in-out 0.1s",
				zIndex: 999,
				boxShadow: trigger
					? "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
					: "none",
			}}
		>
			{children}
		</Paper>
	);
};

export default ElevationScroll;
