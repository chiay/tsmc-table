import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Center
			w="100vw"
			bgColor="rgba(0,0,0,0.02)"
			p="1.5rem"
			position="fixed"
			top="90vh"
			opacity="1"
		>
			<Text color="rgba(0,0,0,0.25)" fontSize="0.875rem">
				© COPYRIGHT - TAIWAN SEMICONDUCTOR MANUFACTURING COMPANY LIMITED
				2020, ALL RIGHT RESERVED
			</Text>
		</Center>
	);
}
