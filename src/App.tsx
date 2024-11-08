import React, { ReactNode } from 'react';

import { CountriesContextProvider } from './context/CountriesContext';

import { CountryList } from './components/CountryList';
import { Layout } from './components/Layout';
import { FilterContextProvider } from './context/FilterContext';
import { ThemeProvider } from './context/ColorsContext';

import { Navigate, Route, Routes } from 'react-router-dom';

import { CountryInfoPage } from './pages/CountryInfoPage';
import { LoginPage } from './components/LoginPage';
import { SearchListContextProvider } from './context/SearchListContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UserProvider, useUser } from './context/UserContext';

const AppComponent = () => {
	const { user, isLoading } = useUser();
	if (isLoading) {
		return <>'Loadnig'</>;
	}
	return (
		<Layout>
			<Routes>
			<Route path="/" element={<Navigate to="/country" replace />} />
				<Route path='/login'>
					<Route index element={<LoginPage />} />
				</Route>
				<Route element={<ProtectedRoute isAllowed={!!user} />}>
					<Route path='/country'>
						<Route index element={<CountryList />} />
						<Route path='/country/:name' element={<CountryInfoPage />} />
					</Route>
				</Route>
			</Routes>
		</Layout>
	);
};
const Providers = ({ children }: { children: ReactNode }) => (
	<ThemeProvider>
		<UserProvider>
			<CountriesContextProvider>
				<FilterContextProvider>
					<SearchListContextProvider>{children}</SearchListContextProvider>
				</FilterContextProvider>
			</CountriesContextProvider>
		</UserProvider>
	</ThemeProvider>
);
const App = () => (
	<Providers>
		<AppComponent />
	</Providers>
);
export default App;
