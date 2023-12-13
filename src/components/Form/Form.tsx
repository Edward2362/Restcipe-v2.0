"use client";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { passwordRegex } from "@/utils/regexes";
import { Box, Button } from "@mui/material";
import FormTextField from "./FormTextField";

const formSchema = yup.object({
	name: yup.string().required("Please fill out this field!"),
	email: yup
		.string()
		.email("Please provide valid email!")
		.required("Please fill out this field!"),
	password: yup
		.string()
		.required("Please fill out this field!")
		.matches(
			passwordRegex,
			"Please provide at least 8 characters with uppercase, lowercase, number and symbol"
		),
	retypePassword: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Please fill out this field!"),
});

type FormValues = yup.InferType<typeof formSchema>;

const defaultValues: FormValues = {
	name: "",
	email: "",
	password: "",
	retypePassword: "",
};

const Form = () => {
	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues: defaultValues,
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
		console.log("data", data);
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				"--spacing": "1.5rem",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<FormTextField
				name="name"
				control={control}
				label="Full name"
				variant="outlined"
				fullWidth
				size="small"
			/>
			<FormTextField
				type="email"
				name="email"
				control={control}
				label="Email"
				variant="outlined"
				fullWidth
				size="small"
			/>
			<FormTextField
				type="password"
				name="password"
				control={control}
				label="Password"
				variant="outlined"
				fullWidth
				size="small"
			/>

			<FormTextField
				type="password"
				name="retypePassword"
				control={control}
				label="Retype Password"
				variant="outlined"
				fullWidth
				size="small"
			/>

			<Button type="submit" sx={{ width: 0.6, mt: "2.5rem" }}>
				SIGN UP
			</Button>
		</Box>
	);
};

export default Form;
