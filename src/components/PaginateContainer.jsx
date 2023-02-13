import React from 'react';
import { Pagination } from './Pagination';

export const PaginateContainer = ({
	filteredCountries,
	setPaginatedCountries,
	countriesPerPage,
	currentPage,
	setCurrentPage,
	children,
}) => {
	return (
		!!filteredCountries.length && (
			<>
				{children}
				<Pagination
					filteredCountries={filteredCountries}
					setPaginatedCountries={setPaginatedCountries}
					countriesPerPage={countriesPerPage}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			</>
		)
	);
};
