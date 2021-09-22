import React from 'react';
import { Tooltip } from '@chakra-ui/react';

export default function OverflowTooltip({ value }) {
	return (
		<Tooltip
			label={value}
			overflow="hidden"
			textOverflow="ellipsis"
			closeDelay={500}
		>
			{value}
		</Tooltip>
	);
}
