import React from 'react';
import '../common/style/search.scss';
import { useCountriesContext } from '../context/CountriesContext';
import { CountryElement } from './CountryElement';

export const CountryList = () => {
	const { isLoading, filteredCountries } = useCountriesContext();

	if (isLoading) {
		return <p>loading</p>;
	}

	return (
		<div className='countries-list'>
			{filteredCountries?.map((el) => (
				<CountryElement name={el.name} capital={el.capital} flags={el.flags} />
			))}
		</div>
	);
};
