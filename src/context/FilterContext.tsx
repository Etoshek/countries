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
	searchCountry: string[] | undefined;
	countryInfo: CountryInfoType[] | undefined;
};

export type FilterActionsContextProps = {
	setSearchCountry: Dispatch<SetStateAction<string[] | undefined>>;
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
	const [searchCountry, setSearchCountry] = useState<string[]>();
	const [allCountries, setAllCountries] = useState<SearchTypes[]>();
	const [countryInfo, setCountryInfo] = useState<CountryInfoType[]>();

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
				code: country.alpha2Code,
			}))
		);
	}, [countryData]);

	useEffect(() => {
		const filtered = allCountries?.filter((country) =>
			
			(searchCountry && searchCountry?.length > 0 &&
				searchCountry?.some((search) =>
					// Check if the country name or capital includes any of the search values
					country.name.toLowerCase().includes(search.toLowerCase()) ||
					country.capital?.toLowerCase().includes(search.toLowerCase())
				)) ||
			// Check if selectedRegion matches the country's region
			(selectedRegion &&
				country.region.toLowerCase().includes(selectedRegion.toLowerCase())) ||
			// If neither searchCountry nor selectedRegion is provided, include all
			(!searchCountry?.length && !selectedRegion)
		);
		setFilteredCountries(filtered);
	}, [
		searchCountry,
		allCountries,
		setFilteredCountries,
		selectedRegion,
		setCountryInfo,
	]);

	const state = useMemo(
		() => ({
			filteredCountries,
			selectedRegion,
			searchCountry,
			countryInfo,
		}),
		[filteredCountries, selectedRegion, searchCountry, countryInfo]
	);
	console.log(filteredCountries, selectedRegion, searchCountry, countryInfo);

	const actions = useMemo(
		() => ({ setSearchCountry, setSelectedRegion, setFilteredCountries }),
		[]
	);

	return (
		<FilterContext.Provider value={state}>
			<FilterActionsContext.Provider value={actions}>
				{children}
			</FilterActionsContext.Provider>
		</FilterContext.Provider>
	);
};
