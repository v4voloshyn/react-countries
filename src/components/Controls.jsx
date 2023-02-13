import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const regionOptions = [
	{ value: 'Africa', label: 'Africa' },
	{ value: 'America', label: 'America' },
	{ value: 'Asia', label: 'Asia' },
	{ value: 'Europe', label: 'Europe' },
	{ value: 'Oceania', label: 'Oceania' },
];

const rangeOptions = [
	{ value: 10, label: '10 Per page' },
	{ value: 25, label: '25 Per page' },
	{ value: 50, label: '50 Per page' },
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const SelectsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	gap: 20px;

	@media (max-width: 767px) {
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const Controls = ({ onSearch, setCountriesPerPage, setCurrentPage }) => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState('');
	const [range, setRange] = useState(10);

	useEffect(() => {
		const regionValue = region?.value || '';
		const rangeValue = range?.value || 10;

		onSearch(search, regionValue);
		setCountriesPerPage(rangeValue);
		// eslint-disable-next-line
	}, [search, region, range]);

	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch} />
			<SelectsWrapper className='controls-wrapper'>
				<CustomSelect
					options={regionOptions || ''}
					placeholder='Filter by Region'
					isClearable
					isSearchable={false}
					value={region}
					onChange={setRegion}
				/>
				<CustomSelect
					options={rangeOptions || ''}
					placeholder='10 Per page'
					isSearchable={false}
					value={range}
					onChange={setRange}
				/>
			</SelectsWrapper>
		</Wrapper>
	);
};
