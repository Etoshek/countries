import React from 'react';
import { Header } from './components/Header';
import { CountriesContextProvider } from './context/CountriesContext';
import { Filters } from './components/Filters';
import { CountryList } from './components/CountryList';
import { Layout } from './components/Layout';

function App() {
	return (
		<CountriesContextProvider>
			<Layout>
				<Header />
				<Filters />
				<CountryList />
			</Layout>
		</CountriesContextProvider>
	);
}

export default App;
