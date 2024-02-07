"use client";

import AOS from "aos";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import Section from "@/components/Page/Home/Section";
import RecipeTicket from "@/components/RestcipeTicket/RecipeTicket";

export default function Home() {
	useEffect(() => {
		// window.scrollTo(0, 0);
		AOS.init();
	}, []);

	return (
		<Box component="main" sx={{ width: 1 }}>
			<Section overlay={true} sx={{ display: "flex" }}>
				<Box
					sx={{
						flex: 0.5,
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<Typography
						fontSize={{ lg: "1.5rem", xl: "2rem" }}
						fontWeight={400}
					>
						Open the fridge and
					</Typography>
					<Typography
						variant="h1"
						color="primary"
						fontSize={{ xl: "12rem" }}
					>
						Restcipe
					</Typography>
				</Box>
				<Box
					sx={{
						flex: 0.5,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						position: "relative",
					}}
					fontSize={{ md: "1.5rem", lg: "2rem", xl: "3rem" }}
				>
					<RecipeTicket
						sx={{ zIndex: 1 }}
						image={"/homepagedish.png"}
						recipeName="Schnitzel"
						calories={125}
						nutrition={{ protein: 13, fat: 1, carb: 74 }}
					/>
					<Box
						sx={{
							flex: 0.5,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							right: { md: "1.7em", lg: "2em", xl: "3em" },
							zIndex: 0,
						}}
						fontSize={{ md: "1rem", lg: "1.5rem", xl: "2.5rem" }}
					>
						<RecipeTicket
							sx={{
								"&::after": {
									content: "''",
									width: "8.5em",
									height: "13.5em",
									backgroundColor: "rgba(0, 0, 0, 0.7)",
									position: "absolute",
								},
							}}
							image={"/homepagedish2.png"}
							recipeName="Chicken Curry"
							calories={125}
							nutrition={{ protein: 37, fat: 11, carb: 52 }}
						/>
					</Box>
					<Box
						sx={{
							flex: 0.5,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							left: { md: "1.7em", lg: "2em", xl: "3em" },
							zIndex: 0,
						}}
						fontSize={{ md: "1rem", lg: "1.5rem", xl: "2.5rem" }}
					>
						<RecipeTicket
							sx={{
								"&::after": {
									content: "''",
									width: "8.5em",
									height: "13.5em",
									backgroundColor: "rgba(0, 0, 0, 0.7)",
									position: "absolute",
								},
							}}
							image={"/homepagedish3.png"}
							recipeName="Penne Meatballs"
							calories={199}
							nutrition={{ protein: 37, fat: 11, carb: 52 }}
						/>
					</Box>
				</Box>
			</Section>
			<Section>
				<Box>sth</Box>
			</Section>
		</Box>
	);
}
