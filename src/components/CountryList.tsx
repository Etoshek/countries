import React from 'react';
import '../common/style/search.scss';
import { useCountriesContext } from '../context/CountriesContext';
import { CountryElement } from './CountryElement';
import { useFilterContext } from '../context/FilterContext';
import { Filters } from './Filters';

export const CountryList = () => {
	const { isLoading } = useCountriesContext();
	const { filteredCountries } = useFilterContext();

	if (isLoading) {
		return <p>loading</p>;
	}
    
	return (
		<>
		<Filters/>
			<div className='countries-list'>
				{filteredCountries?.map((el) => (
					<CountryElement
						key={el.id}
						name={el.name}
						capital={el.capital}
						flags={el.flags}
						population={el.population}
						region={el.region}
					/>
				))}
			</div>
		</>
	);
};
