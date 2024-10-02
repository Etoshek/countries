import { Fragment, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import Menu, { MenuProps as FilterProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FilterMenu = styled((props: FilterProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		color: 'rgb(55, 65, 81)',
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
		...theme.applyStyles('dark', {
			color: theme.palette.grey[300],
		}),
	},
}));

type SelectProps = {
	onClick: any;
	options: string[] | undefined;
	value: string | undefined;
};

export const Select = ({ onClick, value, options }: SelectProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelect = (region: string) => {
		onClick(region);
		handleClose();
	};

	return (
		<>
			<MuiButton
				id='select-button'
				aria-controls={open ? 'select-option' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				sx={{
					borderRadius: '0.3125rem',
					background: '#FFF',
					boxShadow: '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
					color: 'rgb(55, 65, 81)',
				}}
			>
				{value ? `Region: ${value}` : 'Filter by Region'}
			</MuiButton>
			<FilterMenu
				id='select-option'
				MenuListProps={{
					'aria-labelledby': 'select-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{options?.map((option, index) => (
					<Fragment key={option}>
						<MenuItem onClick={() => handleSelect(option)} disableRipple>
							{option}
						</MenuItem>

						{options.length - 1 > index ? <Divider sx={{ my: 0.5 }} /> : null}
					</Fragment>
				))}
			</FilterMenu>
		</>
	);
};
