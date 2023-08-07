import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { BsFillMoonFill } from 'react-icons/bs';

export default function Header() {
	return (
		<Box w={'full'} h={16} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={6}>
			<Heading fontSize={'3xl'}>Explore</Heading>
			<Flex fontSize={'xl'} cursor={'pointer'} alignItems={'center'} gap={8}>
				<Text>
					<BiSearchAlt />
				</Text>
				<Text>
					<BsFillMoonFill />
				</Text>
				<Avatar name='John Doe' src='https://bit.ly/sage-adebayo' />
			</Flex>
		</Box>
	);
}
