import React, { useState } from 'react';
import Menu from './components/Menu';
import MainTable from './components/MainTable';
import Footer from './components/Footer';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from './styles/theme';

const queryClient = new QueryClient();

function App() {
	const [keyword, setKeyword] = useState('');
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Container
					maxW="100vw"
					minH="100vh"
					centerContent
					px="5rem"
					mt="2rem"
				>
					<Menu setKeyword={setKeyword} />
					<MainTable keyword={keyword} />
					{/* <Footer /> */}
				</Container>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default App;
