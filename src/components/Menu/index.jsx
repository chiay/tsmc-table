import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import Title from './Title';
import Search from './Search';

export default function Menu({ setKeyword }) {
	return (
		<Flex w="100%" align="center">
			<Title />
			<Spacer />
			<Search setKeyword={setKeyword} />
		</Flex>
	);
}
