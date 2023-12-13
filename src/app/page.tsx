import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";

export default function Home() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<Box sx={{ height: "100vh", width: "100vw", bgcolor: "white" }}>
			<Button variant="contained" onClick={handleClick}>
				Test
			</Button>
		</Box>
	);
}
