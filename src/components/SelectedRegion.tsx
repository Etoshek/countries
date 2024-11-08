import React from 'react';
import { Select } from '../common/mui/Select';

import '../common/style/filters.scss';

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
		<div className='selected'>
			<Select 
				onClick={setSelectedRegion}
				
				options={
					regions
						? [
								{ label: `No region`, value: undefined },
								...regions.map((region) => ({ label: region, value: region })),
						  ]
						: []
				}
				value={selectedRegion}
			/>
		</div>
	);
};
