"use client";
import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormTextField = (props: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					error={!!error}
					onChange={onChange}
					value={value}
					{...props}
				/>
			)}
		/>
	);
};

export default FormTextField;
