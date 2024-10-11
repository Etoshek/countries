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


export type CountryInfoContextProps = {
	countryInfo: CountryInfoType | undefined;
	isLoading: boolean;
	borders: (string | undefined)[] | undefined;
};

export type CountryInfoActionsContextProps = {};

export type CountryInfoContextProviderProps = {
	state: CountryInfoContextProps;
	actions: CountryInfoActionsContextProps;
};
export const CountryInfoContext = createContext<CountryInfoContextProps>(
	{} as CountryInfoContextProps
);

export const CountryInfoActionsContext =
	createContext<CountryInfoActionsContextProps>(
		{} as CountryInfoActionsContextProps
	);

export const useCountryInfoContext = () => useContext(CountryInfoContext);
export const useCountryInfoActionsContext = () =>
	useContext(CountryInfoActionsContext);
export const CountryInfoContextProvider: React.FC<{
	children: ReactNode;
}> = ({ children }) => {
	const { name } = useParams();
	const [countryInfo, setCountryInfo] = useState<CountryInfoType>();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [borders, setBorders] = useState<(string | undefined)[]>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('/data.json', {
				cache: 'no-store',
			});

			const countries: CountryObject[] = await response.json();
			const foundCountry = countries.find((country) => country.name === name);
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

	useEffect(() => {
		const borders = async () => {
			const response = await fetch('/data.json', {
				cache: 'no-store',
			});

			const countries: CountryObject[] = await response.json();
			const foundBorders = countries.find(
				(country) => country.name === name
			)?.borders;
			const bordersMapper = (
				borders: string[] | undefined
			): (string | undefined)[] | undefined => {
				if (borders === undefined) {
					return undefined;
				}
				return borders.map(
					(border) =>
						countries.find((country) => country.alpha3Code === border)?.name
				);
			};
			setBorders(bordersMapper(foundBorders));
		};
		setIsLoading(true);
		borders();
		setIsLoading(false);
	}, [name]);

	const state = useMemo(
		() => ({ countryInfo, isLoading, borders }),
		[countryInfo, isLoading, borders]
	);

	const actions = useMemo(() => ({}), []);

	return (
		<CountryInfoContext.Provider value={state}>
			<CountryInfoActionsContext.Provider value={actions}>
				{children}
			</CountryInfoActionsContext.Provider>
		</CountryInfoContext.Provider>
	);
};
