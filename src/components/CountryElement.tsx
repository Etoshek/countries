import { Link } from 'react-router-dom';
import '../common/style/country-element.scss';
import { CountryObject } from '../types/datatype';

import { useContext } from 'react';
import { ThemeContext } from '../context/ColorsContext';

type CountryElementProps = Pick<
	CountryObject,
	'capital' | 'name' | 'flags' | 'population' | 'region'
>;
export const CountryElement = ({
	name,
	capital,
	flags,
	population,
	region,
}: CountryElementProps) => {
	const { theme } = useContext(ThemeContext);
	const isDarkMode = theme.backgroundColor === '#202C36';
	return (
		<Link to={`/country/${name}`} className='countries-link'>
			<div className='country-card'>
				<div className='single-card'>
					<section className='flag'>
						<img
							className='country-img'
							src={flags.png}
							alt={`Flag of ${name}`}
						/>
					</section>
					<section className='info'>
						<div className='country-info name'>
							<h1>{name}</h1>
						</div>
						<div className='country-info capital'>
							<p>Capital: {capital}</p>
						</div>
						<div className='country-info region'>
							<p>Region: {region}</p>
						</div>
						<div className='country-info population'>
							<p>Population: {population}</p>
						</div>
					</section>
				</div>
			</div>
		</Link>
	);
};
