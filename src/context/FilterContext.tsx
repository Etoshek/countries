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

import { SearchTypes } from '../types/searchType';
import { useCountriesContext } from './CountriesContext';
import { CountryInfoType } from '../types/countryInfoType';

export type FilterContextProps = {
	filteredCountries: SearchTypes[] | undefined;
	selectedRegion: string | undefined;
	searchFilter: string;
	countryInfo: CountryInfoType[] | undefined;
};

export type FilterActionsContextProps = {
	setSearchFilter: Dispatch<SetStateAction<string>>;
	setSelectedRegion: Dispatch<SetStateAction<string | undefined>>;
};

export type FilterContextProviderProps = {
	state: FilterContextProps;
	actions: FilterActionsContextProps;
};
export const FilterContext = createContext<FilterContextProps>(
	{} as FilterContextProps
);

export const FilterActionsContext = createContext<FilterActionsContextProps>(
	{} as FilterActionsContextProps
);

export const useFilterContext = () => useContext(FilterContext);
export const useFilterActionsContext = () => useContext(FilterActionsContext);
export const FilterContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { countryData } = useCountriesContext();
	const [filteredCountries, setFilteredCountries] = useState<SearchTypes[]>();
	const [selectedRegion, setSelectedRegion] = useState<string>();
	const [searchFilter, setSearchFilter] = useState<string>('');
	const [allCountries, setAllCountries] = useState<SearchTypes[]>();
	const [countryInfo, setCountryInfo] = useState<CountryInfoType[]>();

	useEffect(() => {
		const filtered = allCountries?.filter(
			(country) =>
				country.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
				country.capital?.toLowerCase().includes(searchFilter.toLowerCase()) ||
				(selectedRegion &&
					country.region.toLowerCase().includes(selectedRegion.toLowerCase()))
		);
		setFilteredCountries(filtered);
	}, [
		searchFilter,
		allCountries,
		setFilteredCountries,
		selectedRegion,
		setCountryInfo,
	]);

	useEffect(() => {
		setAllCountries(
			countryData?.map((country) => ({
				id: country.numericCode,
				capital: country.capital,
				name: country.name,
				flags: country.flags,
				population: country.population,
				region: country.region,
				subregion: country.subregion,
				code: country.alpha2Code
			}))
		);
	}, [countryData]);

	const state = useMemo(
		() => ({
			filteredCountries,
			selectedRegion,
			searchFilter,
			countryInfo,
		}),
		[filteredCountries, selectedRegion, searchFilter, countryInfo]
	);

	const actions = useMemo(() => ({ setSearchFilter, setSelectedRegion }), []);

	return (
		<FilterContext.Provider value={state}>
			<FilterActionsContext.Provider value={actions}>
				{children}
			</FilterActionsContext.Provider>
		</FilterContext.Provider>
	);
};
