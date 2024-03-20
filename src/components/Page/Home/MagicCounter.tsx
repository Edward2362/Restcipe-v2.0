"use client";

import { Box, Typography, useScrollTrigger } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { grandifloraOne } from "@/theme/font";

const NUMBER_OF_DISHES = 2000000;

const MagicCounter = () => {
	const [counter, setCounter] = useState<string>("0");
	const counterRef = useRef<HTMLDivElement>(null);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: counterRef.current?.getBoundingClientRect().top,
	});

	useEffect(() => {
		let numCounter = Number(counter.replaceAll(".", ""));

		if (!trigger) {
			return;
		}

		const convertCounter = (str: string, len: number) => {
			console.log("result", str);
			let result = str[0];
			for (let index = 1; index < len - 1; index++) {
				if ((len - index) % 3 === 0) {
					result += ".";
				}
				result += str[index];
			}
			result += str[len - 1];
			return result;
		};

		let loadCounter: ReturnType<typeof setInterval> = setInterval(() => {
			let currentCounter = numCounter + 1 + numCounter;
			if (currentCounter < NUMBER_OF_DISHES) {
				let strCurrentCounter = currentCounter.toString();
				let updatedCounter =
					strCurrentCounter.length < 1000
						? convertCounter(
								strCurrentCounter,
								strCurrentCounter.length
						  )
						: strCurrentCounter;

				setCounter(updatedCounter);
			} else {
				setCounter("2.000.000");
			}
		}, 50);

		return () => clearInterval(loadCounter);
	}, [counter, trigger]);

	return (
		<Box
			ref={counterRef}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Image
				src="mid-s3.png"
				alt="Pin"
				width={0}
				height={0}
				unoptimized
				style={{
					width: "55%",
					height: "auto",
				}}
			/>
			<Typography
				sx={{
					position: "absolute",
					zIndex: 1,
					fontSize: "4em",
					fontFamily: grandifloraOne.style.fontFamily,
				}}
			>
				{counter}
			</Typography>
		</Box>
	);
};

export default MagicCounter;
