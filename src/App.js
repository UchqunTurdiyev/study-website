import { Box } from '@chakra-ui/react';
import './App.css';
import { Header, Sidebar } from './layout';
import { Main } from './component';

function App() {
	return (
		<>
			<Box>
				<Sidebar />
				<Box pl={'140px'} w={'full'} position={'fixed'}>
					<Header />
				</Box>
				<Box pl={'140px'} pt={20}>
					<Main />
				</Box>
			</Box>
		</>
	);
}

export default App;
