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
	searchCountry: string;
	countryInfo: CountryInfoType[] | undefined;
};

export type FilterActionsContextProps = {
	setSearchCountry: Dispatch<SetStateAction<string>>;
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
	const [searchCountry, setSearchCountry] = useState<string>('');
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

	// useEffect(() => {
	// 	const filteredByRegion = allCountries?.filter(
	// 		(country) =>
	// 			(selectedRegion &&
	// 				country.region
	// 					.toLowerCase()
	// 					.includes(selectedRegion.toLowerCase())) ||
	// 			!selectedRegion
	// 	);
	// 	setFilteredCountries(filteredByRegion);
	// }, [allCountries, setFilteredCountries, selectedRegion, setCountryInfo]);

	// useEffect(() => {
	// 	const filteredByCountry = filteredCountries?.filter(
	// 		(country) =>
	// 			(searchCountry &&
	// 				(country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
	// 					country.capital
	// 						?.toLowerCase()
	// 						.includes(searchCountry.toLowerCase()))) ||
	// 			!searchCountry
	// 	);
	// 	setFilteredCountries(filteredByCountry);

	// 	if (selectedRegion?.includes(searchCountry)) {
	// 		setFilteredCountries(filteredByCountry);
	// 	} else {
	// 		<p>coś</p>
	// 	}
	// }, [
	// 	searchCountry,
	// 	allCountries,
	// 	setFilteredCountries,
	// 	selectedRegion,
	// 	setCountryInfo,
	// 	filteredCountries,
	// ]);

	// useEffect(()=>{
	// 	if (selectedRegion?.includes(searchCountry)) {}
	// },[])

	// useEffect(() => {
	// 	const filteredByRegion = allCountries?.filter(
	// 		(country) =>
	// 			(selectedRegion &&
	// 				country.region
	// 					.toLowerCase()
	// 					.includes(selectedRegion.toLowerCase())) ||
	// 			!selectedRegion
	// 	);
	// 	setFilteredCountries(filteredByRegion);
	// }, [allCountries, setFilteredCountries, selectedRegion, setCountryInfo]);

	// useEffect(() => {
	// 	const filteredByCountry = filteredCountries?.filter(
	// 		(country) =>
	// 			(searchCountry &&
	// 				(country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
	// 					country.capital
	// 						?.toLowerCase()
	// 						.includes(searchCountry.toLowerCase()))) ||
	// 			!searchCountry
	// 	);
	// 	setFilteredCountries(filteredByCountry);
		// setFilteredCountries(filteredByCountry);

		// if (selectedRegion?.includes(searchCountry)) {
		// } else {
		// 	<p>something</p>;
		// }
	// }, [
	// 	searchCountry,
	// 	allCountries,
	// 	setFilteredCountries,
	// 	selectedRegion,
	// 	setCountryInfo,
	// 	filteredCountries,
	// ]);

	// const checkInRegion = (country: any) => {
	// 	if (
	// 		country.region &&
	// 		(country.name?.includes(country.region) ||
	// 			country.capital?.includes(country.region))
	// 	) {
	// 		return true;
	// 	}
	// 	return 'nothing';
	// };

	// useEffect(() => {
		// const filteredCountries = allCountries?.filter((country) => {
		// 	return (
		// 		(searchCountry && (country.name || country.capital)) ||
		// 		(selectedRegion && country.region) ||
		// 		(!searchCountry && !selectedRegion)
		// 	);
		// });

	// 	const finalFiltered = filteredCountries?.filter(checkInRegion);

	// 	if (finalFiltered?.length === filteredCountries) {
	// 		setFilteredCountries(finalFiltered);
	// 	} else {
	// 		setFilteredCountries(filteredCountries);
	// 	}
	// }, [allCountries, searchCountry, selectedRegion]);

	// useEffect(() => {
	// 	const filtered = allCountries?.filter(
	// 		(country) =>
	// 			(searchCountry &&
	// 				(country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
	// 					country.capital
	// 						?.toLowerCase()
	// 						.includes(searchCountry.toLowerCase()))) ||

	// 			(selectedRegion &&
	// 				country.region
	// 					.toLowerCase()
	// 					.includes(selectedRegion.toLowerCase())) ||
	// 			(!searchCountry && !selectedRegion)
	// 	);

	// 	setFilteredCountries(filtered);
	// 	if(!(selectedRegion || searchCountry) ){
	// 		<h1>ok</h1>
	// 		setFilteredCountries(filtered);
	// 	}
	// 	else{
	// 		<h1>nie ok</h1>
	// 	}
	// }, [
	// 	searchCountry,
	// 	allCountries,
	// 	setFilteredCountries,
	// 	selectedRegion,
	// 	setCountryInfo,
	// ]);

	// const checkInRegion = (country: any) => {
	// 	if (
	// 		country.region &&
	// 		(country.name?.includes(country.region) ||
	// 			country.capital?.includes(country.region))
	// 	) {
	// 		return true;
	// 	}
	// 	return 'nothing';
	// };



	useEffect(() => {
		const filtered = allCountries?.filter(
			(country) =>
				(searchCountry &&
					(country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
						country.capital
							?.toLowerCase()
							.includes(searchCountry.toLowerCase()))) ||
				(selectedRegion &&
					country.region
						.toLowerCase()
						.includes(selectedRegion.toLowerCase())) ||
				(!searchCountry && !selectedRegion)
		);
		setFilteredCountries(filtered);
	}, [
		searchCountry,
		allCountries,
		setFilteredCountries,
		selectedRegion,
		setCountryInfo,
	]);




	//||
	// useEffect(() => {
	// 	const filtered = allCountries?.filter(
	// 		(country) =>
	// 			(searchCountry &&
	// 				(country.name.toLowerCase().includes(searchCountry.toLowerCase()) ||
	// 					country.capital
	// 						?.toLowerCase()
	// 						.includes(searchCountry.toLowerCase()))) ||
	// 			(selectedRegion &&
	// 				country.region
	// 					.toLowerCase()
	// 					.includes(selectedRegion.toLowerCase())) ||
	// 			(!searchCountry && !selectedRegion)
	// 	);
	// 	setFilteredCountries(filtered);
	// }, [
	// 	searchCountry,
	// 	allCountries,
	// 	setFilteredCountries,
	// 	selectedRegion,
	// 	setCountryInfo,
	// ]);

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
