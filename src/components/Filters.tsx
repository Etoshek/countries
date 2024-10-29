import { SelectedRegion } from './SelectedRegion';
import { Search } from './Search';
import '../common/style/filters.scss';
import { CountryElement } from './Searchh';

type FiltersTypes = {};

export const Filters: React.FC<FiltersTypes> = () => (
	<div className='filters'>
		<Search />
		{/* <CountryElement countryOptions={SearchhProps.}   /> */}
		<SelectedRegion />
	</div>
);
