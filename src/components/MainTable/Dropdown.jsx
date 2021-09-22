import React, { useState } from 'react';
import {
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Portal,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

export default function Dropdown({ value }) {
	const [status, setStatus] = useState(value);

	/** Do something with the selected option
	 *  eg. Update data to database via API endpoint
	 */
	const handleClick = (option) => {
		console.log(option);
		setStatus(option);
	};

	return (
		<Menu
			isLazy
			placement="bottom-end"
			flip={false}
			preventOverflow={false}
			matchWidth={true}
			onOpen={() => {}}
			onClose={() => {}}
		>
			{({ isOpen }) => (
				<>
					<MenuButton
						as={Button}
						fontSize="sm"
						rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
					>
						{status}
					</MenuButton>
					<Portal>
						<MenuList minW="0">
							<MenuItem onClick={() => handleClick('Scheduled')}>
								Scheduled
							</MenuItem>
							<MenuItem onClick={() => handleClick('Open')}>
								Open
							</MenuItem>
							<MenuItem onClick={() => handleClick('Close')}>
								Close
							</MenuItem>
						</MenuList>
					</Portal>
				</>
			)}
		</Menu>
	);
}
