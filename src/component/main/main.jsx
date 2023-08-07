import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import MainLeft from './main-left';
import MainRight from './main-right';

export default function Main() {
	return (
		<Box px={6}>
			<Flex justifyContent={'space-between'}>
				<MainLeft />
				<MainRight />
			</Flex>
		</Box>
	);
}
