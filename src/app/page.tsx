import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import Form from "@/components/Form/Form";

export default function Home() {
	const handleClick = () => {
		console.log("clicked");
	};

	return (
		<Box sx={{ height: "100vh", width: "100vw", bgcolor: "white" }}>
			<Form />
		</Box>
	);
}
