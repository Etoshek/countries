import React from 'react';
import '../common/style/search.scss';

import { CountryPage } from './CountryPage';
import { CountriesInfoContextProvider } from '../context/CountryInfoContext';

const CountryInfoPageComponent = () => {
	return (
		<>
			<div className='country-info'>
				<CountryPage />
			</div>
		</>
	);
};

export const CountryInfoPage = () => (
	<CountriesInfoContextProvider>
		<CountryInfoPageComponent />
	</CountriesInfoContextProvider>
);
