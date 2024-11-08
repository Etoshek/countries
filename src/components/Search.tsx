import React from 'react';

import Select from 'react-select';
import { OptionType } from '../types/option';

import '../common/style/search.scss';
import '../common/style/filters.scss';
import { useCountriesContext } from '../context/SearchListContext';
import { useSearchListActionsContext } from '../context/SearchListContext';
import { useFilterActionsContext } from '../context/FilterContext';

type onChangeOptions = OptionType[];
export const Search = () => {
	const { countryData } = useCountriesContext();
	const { setSearchCountry } = useFilterActionsContext();

	const options = countryData?.map((country) => ({
		value: country.name,
		label: country.name,
	}));

	return (
		<div className='search-box'>
			<span className='material-icons search-icon'>travel_explore</span>
			<Select
				isMulti
				name='countries'
				options={options}
				className='search-select'
				classNamePrefix='select'
				onChange={(value) =>
					setSearchCountry(
						(value as onChangeOptions).map((el: { value: any }) => el.value)
					)
				}
				// onChange={(value) => setSearchCountry((value as OptionType)?.value)}
				placeholder='Search country'
			/>
		</div>
	);
};
