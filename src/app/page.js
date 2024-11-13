'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
	return (
		<motion.div
			className='h-full'
			initial={{ y: '-200vh' }}
			animate={{ y: '0%' }}
			transition={{ duration: 1 }}
		>
			<section className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-2'>
				{/* Image Container */}
				<div className='h-1/2 lg:h-full w-1/2 relative'>
					<Image src={'/hero.png'} fill alt='Hero' className='object-contain' />
				</div>
				{/* Text Container */}
				<div className='h-1/2 lg:h-full w-1/2 flex flex-col justify-center items-center gap-8 '>
					{/* Title */}
					<h1 className='text-4xl md:text-6xl font-bold '>
						Crafting Digital Experience, Designing Tomorrow.
					</h1>
					{/* Text */}

					<p className='text-lg text-gray-700 '>
						Passionate web developer crafting immersive digital experiences with
						cutting-edge technologies. Ready to bring your vision to life and
						push the boundaries of what's possible on the web.
					</p>
					<div className='flex gap-4 w-full'>
						<button className='p-4 rounded-lg ring-1 ring-n-1 bg-n-1 text-n-2'>
							View my Work
						</button>
						<button className='p-4 rounded-lg ring-1 ring-n-1'>
							Contact me
						</button>
					</div>
				</div>
			</section>
		</motion.div>
	);
}
