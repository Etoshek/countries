import { SelectedRegion } from './SelectedRegion';
import '../common/style/filters.scss';
import { Search } from './Search';

type FiltersTypes = {};

export const Filters: React.FC<FiltersTypes> = () => (
	<div className='filters'>
		<Search />
		<SelectedRegion />
	</div>
);
