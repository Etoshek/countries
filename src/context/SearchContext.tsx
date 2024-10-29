import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { CountryObject } from '../types/datatype';

export type SearchCountriesProps = {
	countryData: CountryObject[] | undefined;
	isLoading: boolean;
	regions: string[] | undefined;
	name: string[] | undefined;
	capital: string[] | undefined;
};

export type SearchActionsContextProps = {};

export type SearchContextProviderProps = {
	state: SearchCountriesProps;
	actions: SearchActionsContextProps;
};
export const SearchContext = createContext<SearchCountriesProps>(
	{} as SearchCountriesProps
);

export const CountriesActionsContext = createContext<SearchActionsContextProps>(
	{} as SearchActionsContextProps
);

export const useCountriesContext = () => useContext(SearchContext);
export const useCountriesActionsContext = () =>
	useContext(CountriesActionsContext);
export const CountriesContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [countryData, setCountryData] = useState<CountryObject[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [regions, setRegions] = useState<string[]>();
	const [name, setName] = useState<string[]>();
	const [capital, setCapital] = useState<string[]>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', { cache: 'no-store' });
			const countries: CountryObject[] = await response.json();
			setCountryData(countries);
			setRegions([...new Set(countries.map((country) => country.region))]);
			setName([...new Set(countries.map((country) => country.region))]);
			setCapital([...new Set(countries.map((country) => country.region))]);
		};
		setIsLoading(true);
		fetchData();
		setIsLoading(false);
	}, []);

	const state = useMemo(
		() => ({ countryData, isLoading, regions, name, capital }),
		[countryData, isLoading, regions, name, capital]
	);

	const actions = useMemo(() => ({}), []);

	return (
		<SearchContext.Provider value={state}>
			<CountriesActionsContext.Provider value={actions}>
				{children}
			</CountriesActionsContext.Provider>
		</SearchContext.Provider>
	);
};
