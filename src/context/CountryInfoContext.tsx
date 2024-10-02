import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

import { CountryInfoType } from '../types/countryInfoType';
import { CountryObject } from '../types/datatype';
import { useParams } from 'react-router-dom';

export type CountryInfoProps = {
	countryInfo: CountryInfoType | undefined;
	isLoading: boolean;
};

export type CountriesInfoActionsContextProps = {};

export type CountriesInfoContextProviderProps = {
	state: CountryInfoProps;
	actions: CountriesInfoActionsContextProps;
};
export const CountriesInfoContext = createContext<CountryInfoProps>(
	{} as CountryInfoProps
);

export const CountriesInfoActionsContext =
	createContext<CountriesInfoActionsContextProps>(
		{} as CountriesInfoActionsContextProps
	);

export const CountryInfoContext = () => useContext(CountriesInfoContext);
export const useCountriesInfoActionsContext = () =>
	useContext(CountriesInfoActionsContext);
export const CountriesInfoContextProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { name } = useParams();
	const [countryInfo, setCountryInfo] = useState<CountryInfoType>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', {
				cache: 'no-store',
			});

			const countries: CountryObject[] = await response.json();
			const foundCountry = countries.find(
				(country) => country.name === 'Poland'
			);
			const countryMapper = (
				value: CountryObject | undefined
			): CountryInfoType | undefined => {
				if (value === undefined) {
					return undefined;
				}
				return {
					currencies: value.currencies,
					languages: value.languages,
					capital: value.capital,
					name: value.name,
					flags: value.flags,
					population: value.population,
					subregion: value.subregion,
					demonym: value.demonym,
					region: value.region,
				};
			};
			setCountryInfo(countryMapper(foundCountry));
		};
		setIsLoading(true);
		fetchData();
		setIsLoading(false);
	}, [name]);

	const state = useMemo(
		() => ({ countryInfo, isLoading }),
		[countryInfo, isLoading]
	);

	const actions = useMemo(() => ({}), []);

	return (
		<CountriesInfoContext.Provider value={state}>
			<CountriesInfoActionsContext.Provider value={actions}>
				{children}
			</CountriesInfoActionsContext.Provider>
		</CountriesInfoContext.Provider>
	);
};
