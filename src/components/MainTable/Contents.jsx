import React, { useCallback } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useTable, useSortBy, useBlockLayout } from 'react-table';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { FixedSizeList } from 'react-window';

export default function Contents({ columns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		totalColumnsWidth,
	} = useTable(
		{
			columns,
			data,
			initialState: {
				sortBy: [
					{
						id: 'start_date',
						desc: true,
					},
				],
			},
		},
		useBlockLayout,
		useSortBy
	);

	const RenderRow = useCallback(
		({ index, style }) => {
			const row = rows[index];
			prepareRow(row);
			return (
				<Flex
					{...row.getRowProps()}
					style={style}
					align="center"
					px="1.5rem"
					borderBottom="1px"
					borderStyle="solid"
					borderColor="gray.100"
				>
					{row.cells.map((cell) => {
						return (
							<Box
								{...cell.getCellProps()}
								overflow="hidden"
								textOverflow="ellipsis"
							>
								{cell.render('Cell')}
							</Box>
						);
					})}
				</Flex>
			);
		},
		[prepareRow, rows]
	);

	return (
		<Box
			{...getTableProps()}
			maxW="100%"
			h="100%"
			mt="2rem"
			fontSize="sm"
			whiteSpace="nowrap"
			overflowX="auto"
		>
			<Box>
				{headerGroups.map((headerGroup) => (
					<Box
						{...headerGroup.getHeaderGroupProps()}
						px="1.5rem"
						py="1rem"
						bgColor="#FAFAFA"
						color="rgba(0, 0, 0, 0.65);"
						overflowY="scroll"
					>
						{headerGroup.headers.map((column) => (
							<Box
								{...column.getHeaderProps(
									column.getSortByToggleProps()
								)}
							>
								{column.render('Header')}
								<span>
									{column.isSorted &&
										(column.isSortedDesc ? (
											<ChevronDownIcon />
										) : (
											<ChevronUpIcon />
										))}
								</span>
							</Box>
						))}
					</Box>
				))}
			</Box>
			<Box {...getTableBodyProps()}>
				<FixedSizeList
					height={612 - 52.8}
					itemCount={rows.length}
					itemSize={56}
					width={totalColumnsWidth}
					style={{ overflow: 'auto' }}
				>
					{RenderRow}
				</FixedSizeList>
			</Box>
		</Box>
	);
}
