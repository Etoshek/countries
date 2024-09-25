import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { CountryObject } from '../types/datatype';
import { SearchTypes } from '../types/searchType';

export type CountriesContextProps = {
	countryData: CountryObject[] | undefined;
	isLoading: boolean;
	filteredCountries: SearchTypes[] | undefined
};

export type CountriesActionsContextProps = {
	setFilteredCountries: Dispatch<SetStateAction<SearchTypes[] | undefined>>
};

export type CountriesContextProviderProps = {
	state: CountriesContextProps;
	actions: CountriesActionsContextProps;
};
export const CountriesContext = createContext<CountriesContextProps>(
	{} as CountriesContextProps
);

export const CountriesActionsContext =
	createContext<CountriesActionsContextProps>(
		{} as CountriesActionsContextProps
	);

export const useCountriesContext = () => useContext(CountriesContext);
export const useCountriesActionsContext = () =>
	useContext(CountriesActionsContext);
export const CountriesContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [countryData, setCountryData] = useState<CountryObject[]>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [filteredCountries, setFilteredCountries] = useState<SearchTypes[]>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', { cache: 'no-store' });
			console.log(response);
			const results = await response.json();
			setCountryData(results);
		};
		setIsLoading(true);
		fetchData();
		setIsLoading(false);
	}, []);

	const state = useMemo(
		() => ({ countryData, isLoading, filteredCountries }),
		[countryData, isLoading, filteredCountries]
	);

	const actions = useMemo(() => ({setFilteredCountries}), []);

	return (
		<CountriesContext.Provider value={state}>
			<CountriesActionsContext.Provider value={actions}>
				{children}
			</CountriesActionsContext.Provider>
		</CountriesContext.Provider>
	);
};
