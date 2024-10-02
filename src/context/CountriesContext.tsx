import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { CountryObject } from '../types/datatype';

export type CountriesContextProps = {
	countryData: CountryObject[] | undefined;
	isLoading: boolean;
	regions: string[] | undefined;
};

export type CountriesActionsContextProps = {};

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

	const [regions, setRegions] = useState<string[]>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', { cache: 'no-store' });
			const countries: CountryObject[] = await response.json();
			setCountryData(countries);
			setRegions([...new Set(countries.map((country) => country.region))]);
		};
		setIsLoading(true);
		fetchData();
		setIsLoading(false);
	}, []);

	const state = useMemo(
		() => ({ countryData, isLoading, regions }),
		[countryData, isLoading, regions]
	);

	const actions = useMemo(() => ({}), []);

	return (
		<CountriesContext.Provider value={state}>
			<CountriesActionsContext.Provider value={actions}>
				{children}
			</CountriesActionsContext.Provider>
		</CountriesContext.Provider>
	);
};
