import React from 'react';

import { CountriesContextProvider } from './context/CountriesContext';

import { CountryList } from './components/CountryList';
import { Layout } from './components/Layout';
import { FilterContextProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ColorsContext';

import { Route, Routes } from 'react-router-dom';

import { CountryInfoPage } from './pages/CountryInfoPage';
import { Header } from './components/Header';

function App() {
	return (
		<ThemeProvider>
			<CountriesContextProvider>
				<FilterContextProvider>
					<Layout>
						<Header />
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
