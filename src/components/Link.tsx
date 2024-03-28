import { LinkProps, Link as MLink, SxProps } from "@mui/material";
import NLink from "next/link";

type Props = LinkProps & {
	sx?: SxProps;
};

export const Link = ({ sx = {}, ...restProps }: Props) => {
	return (
		<MLink
			component={NLink}
			underline="none"
			variant="body2"
			sx={{
				fontWeight: 700,
				...sx,
			}}
			{...restProps}
		/>
	);
};
