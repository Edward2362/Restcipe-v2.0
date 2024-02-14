import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import ElevationScroll from "./ElevationScroll";
import Nav from "./Nav";
import Logo from "../Logo";

const Header = () => {
	return (
		<ElevationScroll>
			<Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
				<Logo />
				<SearchBar />
				<Nav />
			</Box>
		</ElevationScroll>
	);
};

export default Header;
