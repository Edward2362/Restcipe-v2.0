"use client";

import { Box, Button, ButtonGroup, Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Nav = () => {
	const matchesXL = useMediaQuery((theme: Theme) =>
		theme.breakpoints.up("xl")
	);

	return (
		<Box component="nav" fontSize={{ md: "0.1rem", lg: "1rem" }}>
			<Button
				color="secondary"
				size={matchesXL ? "large" : "small"}
				href="#"
				sx={{ px: "1.5em", mx: "0.25rem", borderRadius: 100 }}
			>
				create recipe
			</Button>
			<Button
				color="secondary"
				size={matchesXL ? "large" : "small"}
				href="#"
				sx={{ px: "1.5em", mx: "0.25rem", borderRadius: 100 }}
			>
				about us
			</Button>
			<ButtonGroup
				variant="contained"
				size={matchesXL ? "large" : "small"}
				sx={{ borderRadius: 100, marginLeft: "0.25rem" }}
			>
				<Button href="/login" sx={{ px: "1.5em", borderRadius: 100 }}>
					sign in
				</Button>
				<Button href="/register" sx={{ px: "1.5em", borderRadius: 100 }}>
					sign up
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default Nav;
