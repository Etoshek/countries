// import {
// 	createContext,
// 	ReactNode,
// 	useContext,
// 	useEffect,
// 	useMemo,
// 	useState,
// } from 'react';

// import { CountriesList } from '../data/countriesList';
// import { useParams } from 'react-router-dom';

// export type CountriesListContextProps = {
// 	countryList: CountriesList | undefined;
// };

// export type CountriesListContextProviderProps = {
// 	state: CountriesListContextProps;
// };

// export const CountriesListContext =
// 	createContext<CountriesListContextProps | null>(null);

// export const useCountryListContext = () => {
// 	const countryList = useContext(CountriesListContext);
// 	if (!countryList) {
// 		throw new Error(
// 			'useCountryListContext must be used within a CountryListContextProvider'
// 		);
// 	}
// 	return countryList;
// };

// export const CountryListContextProvider: React.FC<{
// 	children: ReactNode;
// }> = ({ children }) => {
// 	const { name } = useParams();
// 	const [countryList, setCountryList] = useState<CountriesList | undefined>(
// 		undefined
// 	);

// 	console.log('Param name:', name);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch('/data.json', { cache: 'no-store' });
// 				if (!response.ok) throw new Error('Network response was not ok');

// 				console.log('Response received:', response);

// 				const countries: CountriesList[] = await response.json();
// 				console.log('Fetched countries:', countries);

// 				const foundCountry = countries.find((country) => country.name === name);
// 				console.log('Found country:', foundCountry);

// 				setCountryList(foundCountry ? { name: foundCountry.name } : undefined);
// 			} catch (error) {
// 				console.error('Failed to fetch data:', error);
// 			}
// 		};

// 		fetchData();
// 	}, [name]);

// 	const state = useMemo(() => ({ countryList }), [countryList]);

// 	return (
// 		<CountriesListContext.Provider value={state}>
// 			{children}
// 		</CountriesListContext.Provider>
// 	);
// };

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { CountryObject } from '../types/datatype';

export type SearchCountriesListProps = {
	countryData: CountryObject[] | undefined;
	name: string[] | undefined;
};

export type SearchListActionsContextProps = {};

export type SearchListContextProviderProps = {
	state: SearchCountriesListProps;
	actions: SearchListActionsContextProps;
};
export const SearchListContext = createContext<SearchCountriesListProps>(
	{} as SearchCountriesListProps
);

export const SearchListActionsContext =
	createContext<SearchListActionsContextProps>(
		{} as SearchListActionsContextProps
	);

export const useCountriesContext = () => useContext(SearchListContext);

export const useSearchListActionsContext = () =>
	useContext(SearchListActionsContext);
export const SearchListContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [countryData, setCountryData] = useState<CountryObject[]>();
	const [name, setName] = useState<string[]>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', { cache: 'no-store' });
			const countries: CountryObject[] = await response.json();
			setCountryData(countries);

			setName([...new Set(countries.map((country) => country.region))]);
		};
		fetchData();
	}, []);

	const state = useMemo(() => ({ countryData, name }), [countryData, name]);
	const actions = useMemo(() => ({}), []);

	return (
		<SearchListContext.Provider value={state}>
			<SearchListActionsContext.Provider value={actions}>
				{children}
			</SearchListActionsContext.Provider>
		</SearchListContext.Provider>
	);
};
