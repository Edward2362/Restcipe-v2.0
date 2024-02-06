import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

const NutritionInfo = (props: {
	bulletColor: string;
	nutritionName: string;
	fact: number;
}) => {
	const { bulletColor, nutritionName, fact } = props;
	return (
		<Box
			sx={{
				width: 1,
				px: "10%",
				display: "flex",
				justifyContent: "space-between",
				mb: 0.5,
			}}
		>
			<Box
				color={bulletColor}
				sx={{ display: "flex", alignItems: "center" }}
			>
				<CircleIcon
					sx={{ fontSize: "0.4em" }}
					fontSize="small"
					color="inherit"
				/>
				<Typography sx={{ ml: 1, fontSize: "0.5em" }}>
					{nutritionName}
				</Typography>
			</Box>
			<Typography sx={{ fontSize: "0.5em" }}>
				{fact}
				{" g"}
			</Typography>
		</Box>
	);
};

export default NutritionInfo;
