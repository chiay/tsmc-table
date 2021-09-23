import React, { useState, useMemo } from 'react';
import Contents from './Contents';
import getRangedData, { filter } from './Data';
import * as dayjs from 'dayjs';
import Dropdown from './Dropdown';
import OverflowTooltip from './OverflowTooltip';

export default function MainTable({ keyword }) {
	const [current, setCurrent] = useState(0);
	const [offset, setOffset] = useState(49999);
	const data = useMemo(
		() =>
			keyword
				? filter(current, offset, keyword)
				: getRangedData(current, offset),
		[keyword, current, offset]
	);
	const columns = useMemo(
		() => [
			{
				Header: 'Audit ID',
				accessor: 'audit_id',
				disableSortBy: true,
				width: '200',
				Cell: ({ value }) => String(value).toUpperCase(),
			},
			{
				Header: 'Supplier',
				accessor: 'supplier',
				disableSortBy: true,
			},
			{
				Header: 'Facility',
				accessor: 'facility',
				disableSortBy: true,
				Cell: ({ value }) => <OverflowTooltip value={value} />,
			},
			{
				Header: 'Start Date',
				accessor: 'start_date',
				sortBy: 'datetime',
				Cell: ({ value }) => dayjs(value).format('YYYY/MM/DD'),
			},
			{
				Header: 'Category',
				accessor: 'category',
				disableSortBy: true,
			},
			{
				Header: 'Audit Target',
				accessor: 'audit_target',
				disableSortBy: true,
			},
			{
				Header: 'Auditor',
				accessor: 'auditor',
				disableSortBy: true,
			},
			{
				Header: 'Score',
				accessor: 'score',
				disableSortBy: true,
				width: '100',
			},
			{
				Header: 'Audit Status',
				accessor: 'audit_status',
				disableSortBy: true,
				Cell: ({ value }) => <Dropdown value={value} />,
			},
		],
		[]
	);

	return <Contents columns={columns} data={data} />;
}
