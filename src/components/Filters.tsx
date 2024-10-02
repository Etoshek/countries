import { SelectedRegion } from './SelectedRegion';
import { Search } from './Search';

type FiltersTypes = {};

export const Filters: React.FC<FiltersTypes> = () => (
	<div>
		<Search />
		<SelectedRegion />
	</div>
);
