import '../common/style/search.scss';
import { useCountriesContext } from '../context/CountriesContext';
import { CountryElement } from './CountryElement';
import { useFilterContext } from '../context/FilterContext';
import { Filters } from './Filters';
import { Header } from '../components/Header';
import { Logout } from './Logout';
import { LogoutProvider } from '../context/LogoutContext';

export const CountryList = () => {
	const { isLoading } = useCountriesContext();
	const { filteredCountries } = useFilterContext();

	if (isLoading) {
		return <p>loading</p>;
	}

	return (
		<>
			<Header />
		
			<Filters />
			<LogoutProvider>
            <Logout />
        </LogoutProvider>
			<div className='countries-list'>
				{filteredCountries === null ? (
					<p>nothing</p>
				) : (
					filteredCountries?.map((el) => (
						<CountryElement
							key={el.id}
							name={el.name}
							capital={el.capital}
							flags={el.flags}
							population={el.population}
							region={el.region}
						/>
					))
				)}
			</div>
		</>
	);
};
