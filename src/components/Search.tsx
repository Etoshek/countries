import React from 'react';
import '../common/style/search.scss';
import '../common/style/filters.scss';
import {
	useFilterActionsContext,
	useFilterContext,
} from '../context/FilterContext';

interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
	const { searchCountry } = useFilterContext();
	const { setSearchCountry } = useFilterActionsContext();

	return (
		<div className='search-box'>
			<span className='material-icons search-icon'>travel_explore</span>

			<input
				className='search-input'
				type='text'
				placeholder='Search by name or capital...'
				value={searchCountry}
				onChange={(e) => setSearchCountry(e.target.value)}
			/>
		</div>
	);
};
