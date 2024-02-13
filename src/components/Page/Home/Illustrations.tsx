import { Grid } from "@mui/material";
import React from "react";
import Image from "next/image";

interface IllustrationImage {
	src: string;
	height: string;
}

const Illustrations = (props: { images: IllustrationImage[] }) => {
	const { images } = props;
	return (
		<Grid
			container
			sx={{
				height: 0.5,
			}}
		>
			{images.map((image: IllustrationImage, index: number) => (
				<Grid
					sx={{
						height: 1,
						width: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "end",
						pt: "5em",
					}}
					key={index}
					item
					xs={6}
				>
					<Image
						src={image.src}
						alt="illustration image"
						width={0}
						height={0}
						style={{
							width: "auto",
							height: image.height,
							objectFit: "cover",
						}}
						unoptimized
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default Illustrations;
