import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import Logo from "../Logo";
import SearchBar from "./SearchBar";
import ElevationScroll from "./ElevationScroll";

const Header = () => {
	return (
		<ElevationScroll>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Logo />
				<SearchBar />
				<Box component="nav">
					<Button
						color="secondary"
						href="#"
						sx={{ px: "1.5em", mx: "0.25rem", borderRadius: 100 }}
					>
						create recipe
					</Button>
					<Button
						color="secondary"
						href="#"
						sx={{ px: "1.5em", mx: "0.25rem", borderRadius: 100 }}
					>
						about us
					</Button>
					<ButtonGroup
						variant="contained"
						sx={{ borderRadius: 100, marginLeft: "0.25rem" }}
					>
						<Button
							href="#"
							sx={{ px: "1.5em", borderRadius: 100 }}
						>
							sign in
						</Button>
						<Button
							href="#"
							sx={{ px: "1.5em", borderRadius: 100 }}
						>
							sign up
						</Button>
					</ButtonGroup>
				</Box>
			</Box>
		</ElevationScroll>
	);
};

export default Header;
