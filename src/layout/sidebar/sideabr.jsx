import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../img/Pixer-logo.png';
import { AiFillHome } from 'react-icons/ai';
import { BiSolidContact } from 'react-icons/bi';

export default function Sideabr() {
	return (
		<Box
			w={'140px'}
			h={'100vh'}
			position={'fixed'}
			bgColor={'gray.700'}
			display={'flex'}
			alignItems={'center'}
			flexDirection={'column'}
			pt={'10'}
		>
			<Image src={logo} alt='Logo' />

			<Flex flexDirection={'column'} fontSize={'3xl'} cursor={'pointer'} pt={'28'} gap={10}>
				<Text>
					<AiFillHome />
				</Text>
				<Text>
					<AiFillHome />
				</Text>
				<Text>
					<AiFillHome />
				</Text>
				<Text>
					<AiFillHome />
				</Text>
				<Text>
					<AiFillHome />
				</Text>
				<Text>
					<BiSolidContact />
				</Text>
			</Flex>
		</Box>
	);
}
