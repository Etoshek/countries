import { Link } from 'react-router-dom';
import '../common/style/country-element.scss';
import { CountryObject } from '../types/datatype';

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
	return (
		<Link to={`/country/${name}`} className='countries-card'>
			<div className='country-card'>
				<div className='single-card'>
					<img
						className='country-img'
						src={flags.png}
						alt={`Flag of ${name}`}
					/>
					<div className='country-name'>
						<p>Country: {name}</p>
					</div>
					<div className='country-capital'>
						<p>Capital: {capital}</p>
					</div>
					<div className='country-region'>
						<p>Region: {region}</p>
					</div>
					<div className='country-population'>
						<p>Population: {population}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};
