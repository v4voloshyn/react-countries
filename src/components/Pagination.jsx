import styled from 'styled-components';

import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const CustomPaginate = styled(ReactPaginate).attrs({
	activeClassName: 'active',
	pageClassName: 'page',
	nextClassName: 'next',
	previousClassName: 'previous',
	breakClassName: 'break',
})`
	margin-top: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 10px;
	list-style-type: none;
	padding: 0 5rem;
	li a {
		border-radius: 7px;
		padding: 0.1rem 1rem;
		border: gray 1px solid;
		cursor: pointer;
	}
	li.previous a,
	li.next a,
	li.break a {
		border-color: transparent;
	}
	li.previous a,
	li.next a {
		border: 1px solid #ccc;
	}
	li.active a {
		background-color: #0366d6;
		border-color: transparent;
		color: white;
		min-width: 32px;
	}
	li.disabled a {
		color: #fff;
		background-color: #5a5a5a;
	}
	li.disable,
	li.disabled a {
		cursor: default;
	}

	@media (max-width: 646.98px) {
		display: flex;
		flex-wrap: wrap;

		li.active a {
			min-width: 15px;
		}
		li {
			margin-top: 10px;
		}
		padding: 0;
		margin: 2rem auto;
		justify-content: center;
		gap: 5px;
	}
`;

export const Pagination = ({
	filteredCountries,
	setPaginatedCountries,
	countriesPerPage,
	currentPage,
	setCurrentPage,
}) => {
	const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

	const handlePaginate = (list) => {
		return list.slice(currentPage * countriesPerPage, (currentPage + 1) * countriesPerPage);
	};

	useEffect(() => {
		const paginatedList = handlePaginate(filteredCountries);

		setPaginatedCountries(paginatedList);
		window.scrollTo({ top: 0, behavior: 'smooth' });
		// eslint-disable-next-line
	}, [filteredCountries, currentPage]);

	return (
		<CustomPaginate
			onPageChange={(page) => setCurrentPage(page.selected)}
			marginPagesDisplayed={1}
			pageRangeDisplayed={3}
			pageCount={totalPages}
			forcePage={currentPage}
		/>
	);
};
