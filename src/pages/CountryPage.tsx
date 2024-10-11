import { Link } from 'react-router-dom';
import {
	CountryInfoContextProvider,
	useCountryInfoContext,
} from '../context/CountryInfoContext';
import '../common/style/borders-button.scss';

export const CountryPage = () => {
	const { countryInfo, borders } = useCountryInfoContext();
	return (
		<>
			<section className='img-section'>
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

				{borders?.length ? (
					<>
						<span>Borders: </span>
						{borders?.map((border) => (
							<CountryInfoContextProvider>
								<Link target='_blank' to={`/country/${border}`}>
									<button className='borders-button'>{border} </button>
								</Link>
							</CountryInfoContextProvider>
						))}
					</>
				) : null}
			</section>
		</>
	);
};
