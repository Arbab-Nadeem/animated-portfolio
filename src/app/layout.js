import { Inter } from 'next/font/google';
import './globals.css';
import { TransitionProvider } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Animated Portfolio',
	description: 'Presenting a portfolio',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className}  antialiased`}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
