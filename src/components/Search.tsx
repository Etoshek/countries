import React from 'react';
import '../common/style/search.scss';
import {
	useFilterActionsContext,
	useFilterContext,
} from '../context/FilterContext';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
	const { searchFilter } = useFilterContext();
	const { setSearchFilter } = useFilterActionsContext();

	return (
		<>
			<div className='search'>
				<div className='search-box'>
					<span className='material-icons search-icon'>travel_explore</span>

					<input
						className='search-input'
						type='text'
						placeholder='Search by name or capital...'
						value={searchFilter}
						onChange={(e) => setSearchFilter(e.target.value)}
					/>
				</div>
			</div>
		</>
	);
};
