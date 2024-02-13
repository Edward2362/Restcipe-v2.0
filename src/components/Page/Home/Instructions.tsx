import { grandifloraOne } from "@/theme/theme";
import { Grid, Typography } from "@mui/material";
import React from "react";

interface Instruction {
	title: string;
	content: string;
}

const Instructions = (props: { instructions: Instruction[] }) => {
	const { instructions } = props;
	return (
		<Grid
			container
			sx={{
				height: 0.5,
			}}
		>
			{instructions.map((instruction: Instruction, index: number) => (
				<Grid
					sx={{
						height: 1,
						width: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "start",
						alignItems: "center",
					}}
					key={index}
					item
					xs={6}
				>
					<Typography
						color="secondary"
						noWrap={true}
						sx={{
							fontFamily: grandifloraOne.style.fontFamily,
							fontSize: "1em",
							wordWrap: "breal-all",
							textOverflow: "ellipsis",
							overflow: "hidden",
							width: 1,
							textAlign: "center",
							mt: "2rem",
							mb: "1rem",
						}}
					>
						{instruction.title}
					</Typography>
					<Typography
						sx={{
							fontSize: "0.6em",
							width: 0.7,
							textAlign: "center",
						}}
					>
						{instruction.content}
					</Typography>
				</Grid>
			))}
		</Grid>
	);
};

export default Instructions;
