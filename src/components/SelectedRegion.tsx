import React from 'react';
import { Select } from '../common/mui/Select';

import '../common/style/select-region.scss';
import {
	useFilterActionsContext,
	useFilterContext,
} from '../context/FilterContext';
import { useCountriesContext } from '../context/CountriesContext';

interface SelectedRegionProps {}

export const SelectedRegion: React.FC<SelectedRegionProps> = () => {
	const { selectedRegion } = useFilterContext();
	const { setSelectedRegion } = useFilterActionsContext();
	const { regions } = useCountriesContext();

	return (
		<Select
			onClick={setSelectedRegion}
			options={regions}
			value={selectedRegion}
		/>
	);
};
