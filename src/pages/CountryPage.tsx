import { Link, useNavigate } from 'react-router-dom';
import { useCountryInfoContext } from '../context/CountryInfoContext';
import '../common/style/borders-button.scss';
import '../common/style/country-page.scss';

export const CountryPage = () => {
	const { countryInfo, borders } = useCountryInfoContext();
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<button onClick={goBack} className='back-button'>
				<span className='material-icons back-icon'>arrow_back</span>
				<p className='p-back'>Back</p>
			</button>

			<div className='country-page'>
				<div className='flag-section'>
					<img
						className='country-img'
						src={countryInfo?.flags.png}
						alt={`Flag of ${countryInfo?.name}`}
					/>
				</div>

				<div className='information-section'>
					<h1>
						{countryInfo?.name &&
							countryInfo?.name.charAt(0).toUpperCase() +
								countryInfo?.name.slice(1)}
					</h1>
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
				</div>

				<div className='links-borders'>
					{borders?.length ? (
						<>
							<span>Borders: </span>
							{borders?.map((border) => (
								<Link target='_blank' to={`/country/${border.name}`}>
									<button className='borders-button'>{border.name} </button>
									<p>{border.capital}</p>
								</Link>
							))}
						</>
					) : null}
				</div>
			</div>
		</>
	);
};
