import { Box, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
	return (
		<Box
			sx={{
				border: "solid 2px",
				borderColor: "secondary.main",
				flex: 1,
				marginLeft: "1.75em",
				position: "relative",
				display: "flex",
				alignItems: "center",
				borderRadius: 100,
				px: "1rem",
				alignSelf: "stretch",
				backgroundColor: "#FBFBFB",
			}}
		>
			<Box
				sx={{
					height: "100%",
					pointerEvents: "none",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginRight: 1,
				}}
			>
				<SearchIcon sx={{ color: "secondary.main" }} />
			</Box>
			<InputBase
				sx={{ width: 1 }}
				placeholder="Search…"
				inputProps={{ "aria-label": "search" }}
			/>
		</Box>
	);
};

export default SearchBar;
