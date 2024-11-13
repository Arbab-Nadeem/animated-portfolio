'use client';

import { AnimatePresence, delay, motion } from 'framer-motion';
import { Navbar } from '@/components';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
	const pathName = usePathname();
	return (
		<AnimatePresence mode='wait'>
			<main
				key={pathName}
				className='w-screen h-screen bg-gradient-to-b from-red-50 to-green-50'
			>
				<motion.div
					className='h-screen w-screen bg-n-1 fixed rounded-b-[100px] z-40'
					animate={{ height: '0vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
				/>
				<motion.div
					className=' fixed rounded-b-[100px] inset-0 to-n-2 bg-n-1 m-auto cursor-default z-50 w-fit h-fit'
					initial={{ opacity: 1 }}
					animate={{ opacity: 0 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<span className='text-n-2 text-8xl '>{pathName.substring(1)}</span>
				</motion.div>
				<motion.div
					className='h-screen w-screen bg-n-1 fixed bottom-0 rounded-t-[100px] z-30'
					initial={{ height: '140vh' }}
					animate={{ height: '0vh', transition: { delay: 0.4 } }}
				/>
				<div className='h-24'>
					<Navbar />
				</div>
				<div className='h-[calc(100vh-6rem)]'>{children}</div>
			</main>
		</AnimatePresence>
	);
};

export default TransitionProvider;
