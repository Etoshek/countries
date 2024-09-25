import React, { useEffect, useState } from 'react';
import '../common/style/search.scss';
import { CountryObject } from '../types/datatype';
import {
	useCountriesActionsContext,
	useCountriesContext,
} from '../context/CountriesContext';

type SearchTypes = {
	id: string;
} & Pick<CountryObject, 'capital' | 'name' | 'flags'>;

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
	const { countryData } = useCountriesContext();
	const { setFilteredCountries } = useCountriesActionsContext();
	const [filter, setFilter] = useState<string>('');

	const [allCountries, setAllCountries] = useState<SearchTypes[]>();

	useEffect(() => {
		const filtered = allCountries?.filter(
			(country) =>
				country.name.toLowerCase().includes(filter.toLowerCase()) ||
				country.capital?.toLowerCase().includes(filter.toLowerCase())
		);
		setFilteredCountries(filtered);
	}, [filter, allCountries, setFilteredCountries]);

	useEffect(() => {
		setAllCountries(
			countryData?.map((country) => ({
				id: country.numericCode,
				capital: country.capital,
				name: country.name,
				flags: country.flags,
			}))
		);
	}, [countryData]);

	return (
		<>
			<div className='search-box'>
				<p className='material-icons search-icon'>search</p>
				<input
					className='search-input'
					type='text'
					placeholder='Search by name or capital...'
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
		</>
	);
};
