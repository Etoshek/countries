import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CountryInfoType } from '../types/countryInfoType';
import { CountryInfoContext } from '../context/CountryInfoContext';

export const CountryPage = () => {
	const { countryInfo } = CountryInfoContext();
	return (
		<>
			{/* <Helmet> */}
			{/* <title>Country | {name}</title>
				<h1>
					Capital: {capital && capital.charAt(0).toUpperCase() + name.slice(1)}
				</h1> */}
			{/* </Helmet> */}

			<section className='img-card'>
				<img
					className='country-img'
					src={countryInfo?.flags.png}
					alt={`Flag of ${countryInfo?.name}`}
				/>
			</section>

			<section className='information-section'>
				<p>
					<span>Country: </span>
					{countryInfo?.name &&
						countryInfo?.name.charAt(0).toUpperCase() +
							countryInfo?.name.slice(1)}
				</p>
				<p>
					<span>Capital: </span>
					{countryInfo?.capital &&
						countryInfo?.capital.charAt(0).toUpperCase() +
							countryInfo?.capital.slice(1)}
				</p>
				<p>
					<span>Subregion: </span>
					{countryInfo?.subregion &&
						countryInfo?.subregion.charAt(0).toUpperCase() +
							countryInfo?.subregion.slice(1)}
				</p>
				<p>
					<span>Language: </span>
					{countryInfo?.demonym}
				</p>
				<p>
					<span>Population: </span>
					{countryInfo?.population}
				</p>
			</section>
		</>
	);
};
