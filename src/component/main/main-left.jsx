import { AspectRatio, Box, Button, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsBookmarkCheck } from 'react-icons/bs';
import { AiFillLike } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';

export default function MainLeft() {
	return (
		<Box w={'full'}>
			<Stack>
				<AspectRatio w='full' h={'420px'} ratio={1}>
					<iframe title='naruto' src='https://www.youtube.com/embed/rRAWERiAcbM' allowFullScreen />
				</AspectRatio>
				<Flex justifyContent={'space-between'}>
					<Heading fontSize={'3xl'}>ReactJS course for free</Heading>
					<Flex fontSize={'xl'} gap={5}>
						<Flex cursor={'pointer'} alignItems={'center'}>
							<AiFillLike />
							<Text pl={2}>2,3</Text>
						</Flex>
						<Flex cursor={'pointer'} alignItems={'center'}>
							<FaRegCommentDots />
							<Text pl={2}>200</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex pt={6} gap={4}>
					<IconButton
						isRound={true}
						variant='outline'
						colorScheme='white'
						aria-label='Done'
						fontSize='18px'
						icon={<BsBookmarkCheck />}
					/>
					<IconButton
						isRound={true}
						variant='outline'
						colorScheme='white'
						aria-label='Done'
						fontSize='18px'
						icon={<BsBookmarkCheck />}
					/>
					<IconButton
						isRound={true}
						variant='outline'
						colorScheme='white'
						aria-label='Done'
						fontSize='18px'
						icon={<BsBookmarkCheck />}
					/>
					<Button bg='green.500'>Follow</Button>
				</Flex>
			</Stack>
		</Box>
	);
}
