import React from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Search({ setKeyword }) {
	return (
		<Box>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<SearchIcon color="gray.400" />}
				/>
				<Input
					type="text"
					placeholder="Search"
					fontSize="md"
					h="2.5rem"
					maxW="22.5rem"
					bgColor="rgba(0, 0, 0, 0.04)"
					onChange={(e) => setKeyword(e.target.value)}
				/>
			</InputGroup>
		</Box>
	);
}
