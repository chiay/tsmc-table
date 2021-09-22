import data from './data.json';

/**
 * Get a list of data
 *
 * @param {Number} current
 * @param {Number} offset
 * @returns {Array} List of data retrieved from collection
 */
export default function getRangedData(current, offset = 20) {
	let arr = [];
	for (let i = current; i < offset; ++i) {
		arr.push(data[i]);
	}
	return arr;
}

/**
 * Filter list based on keyword
 *
 * @param {Number} current
 * @param {Number} offset
 * @param {String} keyword
 * @returns {Array} A list of filtered data
 */
export function filter(current, offset = 20, keyword) {
	//const arr = getRangedData(current, offset);
	return [...data].filter(
		(a) =>
			a.audit_id.includes(keyword) ||
			a.supplier.includes(keyword) ||
			a.facility.includes(keyword) ||
			a.category.includes(keyword) ||
			a.audit_target.includes(keyword) ||
			a.auditor.includes(keyword)
	);
}
