import { SelectedRegion } from './SelectedRegion';
import { Search } from './Search';
import '../common/style/filters.scss'

type FiltersTypes = {};

export const Filters: React.FC<FiltersTypes> = () => (
	<div className='filters'>
		<Search />
		<SelectedRegion />
	</div>
);
