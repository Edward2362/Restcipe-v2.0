"use client";
import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { Controller, Control } from "react-hook-form";

type Props = {
	control: Control<any>;
	name: string;
} & TextFieldProps;

const FormTextField = ({ control, name, ...restTextFieldProps }: Props) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					error={!!error}
					onChange={onChange}
					value={value}
					{...restTextFieldProps}
				/>
			)}
		/>
	);
};

export default FormTextField;
