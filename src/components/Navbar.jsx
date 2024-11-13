'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Navlink } from '.';
import { motion } from 'framer-motion';

const links = [
	{
		id: 1,
		url: '/',
		title: 'Home',
	},
	{
		id: 2,
		url: '/about',
		title: 'About',
	},
	{
		id: 3,
		url: '/portfolio',
		title: 'Portfolio',
	},
	{
		id: 4,
		url: '/contact',
		title: 'Contact',
	},
];

const topBarVariant = {
	closed: {
		rotate: 0,
	},
	opened: {
		rotate: 45,
		backgroundColor: 'rgb(255,255,255)',
	},
};

const centeredBarVariant = {
	closed: {
		opacity: 1,
	},
	opened: {
		opacity: 0,
	},
};
const bottomBarVariant = {
	closed: {
		rotate: 0,
	},
	opened: {
		rotate: -45,
		backgroundColor: 'rgb(255,255,255)',
	},
};
const listVariant = {
	opened: {
		x: 0,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.2,
		},
	},
	closed: {
		x: '100vw',
	},
};

const listItemVariant = {
	closed: {
		x: -10,
		opacity: 0,
	},
	opened: {
		x: 0,
		opacity: 1,
	},
};
const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
			{/* Menu Links */}
			<div className='hidden md:flex gap-4 w-1/3'>
				{links.map((link) => (
					<Navlink key={link.id} link={link} />
				))}
			</div>
			{/* Logo */}
			<div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
				<Link
					href='/'
					className='text-sm bg-n-1 rounded-md p-1 font-semibold flex items-center justify-center'
				>
					<span className='text-n-2 mr-2'>Black</span>
					<span className='w-10 h-6 rounded text-n-1 bg-n-2 flex items-center justify-center'>
						.buck
					</span>
				</Link>
			</div>
			{/* Socials */}
			<div className='hidden md:flex gap-4 w-1/3'>
				<Link href='https://github.com'>
					<Image src='/github.png' width={24} height={24} alt='github logo' />
				</Link>
				<Link href='https://linkedin.com'>
					<Image
						src='/linkedin.png'
						width={24}
						height={24}
						alt='linkedin logo'
					/>
				</Link>
				<Link href='https://pinterest.com'>
					<Image
						src='/pinterest.png'
						width={24}
						height={24}
						alt='pinterest logo'
					/>
				</Link>
				<Link href='https://dribbble.com'>
					<Image
						src='/dribbble.png'
						width={24}
						height={24}
						alt='dribbble logo'
					/>
				</Link>
				<Link href='https://instagram.com'>
					<Image
						src='/instagram.png'
						width={24}
						height={24}
						alt='instagram logo'
					/>
				</Link>
				<Link href='https://github.com'>
					<Image src='/github.png' width={24} height={24} alt='github logo' />
				</Link>
			</div>
			{/* Responsive Menu */}
			<div className='md:hidden'>
				<button
					className='w-9 h-7 flex flex-col justify-between z-50 relative'
					onClick={() => setOpen((prev) => !prev)}
				>
					<motion.div
						variants={topBarVariant}
						animate={open ? 'opened' : 'closed'}
						className='w-9 h-1 bg-n-1 rounded origin-left'
					></motion.div>
					<motion.div
						variants={centeredBarVariant}
						animate={open ? 'opened' : 'closed'}
						className='w-9 h-1 bg-n-1 rounded'
					></motion.div>
					<motion.div
						variants={bottomBarVariant}
						animate={open ? 'opened' : 'closed'}
						className='w-9 h-1 bg-n-1 rounded origin-left'
					></motion.div>
				</button>

				{/* Menu List */}
				{open && (
					<motion.div
						variants={listVariant}
						initial='closed'
						animate='opened'
						transition='linear'
						className='absolute top-0 left-0 w-screen h-screen bg-n-1 text-n-2 flex flex-col justify-center items-center gap-6 text-2xl'
					>
						{links.map((link) => (
							<motion.div variants={listItemVariant} className='' key={link.id}>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
