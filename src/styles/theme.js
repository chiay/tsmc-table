import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: {
			m: 0,
			p: 0,
		},
	},
	fonts: {
		body: 'Roboto',
	},
	components: {
		Input: {
			baseStyle: {
				h: '2.5rem',
				fontSize: 'md',
			},
		},
		Button: {
			baseStyle: {
				w: '100%',
				fontSize: 'sm',
				fontWeight: 'normal',
				textAlign: 'left',
				textTransform: 'capitalize',
			},
		},
	},
});

export default theme;
