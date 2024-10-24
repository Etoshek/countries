import React from 'react';
import '../common/style/search.scss';

import { CountryPage } from './CountryPage';
import { CountryInfoContextProvider } from '../context/CountryInfoContext';

const CountryInfoPageComponent = () => {
	return <CountryPage />;
};

export const CountryInfoPage = () => (
	<CountryInfoContextProvider>
		<CountryInfoPageComponent />
	</CountryInfoContextProvider>
);
