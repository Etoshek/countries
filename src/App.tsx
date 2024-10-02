import React from 'react';

import { CountriesContextProvider } from './context/CountriesContext';
import { Filters } from './components/Filters';
import { CountryList } from './components/CountryList';
import { Layout } from './components/Layout';
import { FilterContextProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ColorsContext';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';

import { CountryInfoPage } from './pages/CountryInfoPage';

function App() {
	return (
		<ThemeProvider>
			<CountriesContextProvider>
				<FilterContextProvider>
					<Layout>
						<Filters />
						{/* <Helmet>
							<title>Where in the world?</title>
						</Helmet> */}
						<Routes>
							<Route path='/'>
								<Route index element={<CountryList />} />
								<Route path='/country/:name' element={<CountryInfoPage />} />
							</Route>
						</Routes>
					</Layout>
				</FilterContextProvider>
			</CountriesContextProvider>
		</ThemeProvider>
	);
}

export default App;
