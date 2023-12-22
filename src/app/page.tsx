import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import Form from "@/components/Form/Form";

export default function Home() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<Box sx={{ height: "100vh", width: "100vw", bgcolor: "white" }}>
			<Typography variant="h1">Restcipe</Typography>
			<Form />
			<Box
				sx={{
					height: "100vh",
					width: "100vw",
					bgcolor: "primary.main",
				}}
			>
				hello
			</Box>
			<Box sx={{ height: "100vh", width: "100vw", bgcolor: "red" }}></Box>
			<Box
				sx={{ height: "100vh", width: "100vw", bgcolor: "blue" }}
			></Box>
		</Box>
	);
}
