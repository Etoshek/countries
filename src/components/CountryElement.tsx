import '../common/style/country-element.scss';
import { CountryObject } from '../types/datatype';

type CountryElementProps = Pick<CountryObject, 'capital' | 'name' | 'flags'>;
export const CountryElement = ({
	name,
	capital,
	flags,
}: CountryElementProps) => {
	return (
		<div className='countries-card'>
			<div className='country-card'>
				<div className='single-card'>
					<img
						className='country-img'
						src={flags.png}
						alt={`Flag of ${name}`}
					/>
					<div className='country-name'>{name}</div>
					<div className='country-capital'>{capital}</div>
				</div>
			</div>
		</div>
	);
};
