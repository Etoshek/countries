import React, { useState } from 'react';

import Select, { MultiValue } from 'react-select';
import { CountryObject } from '../types/datatype';

import {
	useFilterActionsContext,
	useFilterContext,
} from '../context/FilterContext';

interface SearchhProps {
	countryOptions: OptionType;
}

// type SearchhProps = Pick<CountryObject, 'name' | 'region'>;

interface OptionType {
	label: string;
	value: string;
}

const options = [
	{ label: 'Poland', value: 'Poland' },
	{ label: 'Germany', value: 'Germany' },
	{ label: 'France', value: 'France' },
];

export const CountryElement = ({ countryOptions }: SearchhProps) => {
	const { searchCountry } = useFilterContext();
	const { setSearchCountry } = useFilterActionsContext();
	const [selectedOptions, setSelectedOptions] = useState<
		MultiValue<OptionType>
	>([]);

	return (
		<Select
			isMulti
			name='countries'
			options={options}
			className='search-select'
			classNamePrefix='select'
            value={selectedOptions}
		/>
	);
};
