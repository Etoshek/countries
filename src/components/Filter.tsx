import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
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

const FilterWrapper = styled('div')({});

const Filter = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [selectedRegion, setSelectedRegion] = React.useState<string | null>(
		null
	);
	const open = Boolean(anchorEl);

	const handleSelected = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSelectRegion = (region: string) => {
		setSelectedRegion(region);
		console.log('Selected Region:', region);
		handleClose();
	};

	return (
		<FilterWrapper>
			<Button
				id='demo-customized-button'
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleSelected}
				endIcon={<KeyboardArrowDownIcon />}
				sx={{
					borderRadius: '0.3125rem',
					background: '#FFF',
					boxShadow: '0px 2px 9px 0px rgba(0, 0, 0, 0.05)',
					color: 'rgb(55, 65, 81)',
				}}
			>
				{selectedRegion ? `Region: ${selectedRegion}` : 'Filter by Region'}
			</Button>
			<FilterMenu
				id='demo-customized-menu'
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem onClick={() => handleSelectRegion('Show-All')} disableRipple>
					show all
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => handleSelectRegion('Africa')} disableRipple>
					Africa
				</MenuItem>

				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => handleSelectRegion('America')} disableRipple>
					America
				</MenuItem>

				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => handleSelectRegion('Asia')} disableRipple>
					Asia
				</MenuItem>

				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => handleSelectRegion('Europe')} disableRipple>
					Europe
				</MenuItem>

				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={() => handleSelectRegion('Oceania')} disableRipple>
					Oceania
				</MenuItem>
			</FilterMenu>
		</FilterWrapper>
	);
};

export default Filter;
