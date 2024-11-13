'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ link }) => {
	const pathName = usePathname();
	return (
		<Link
			href={link.url}
			className={`rounded p-1 ${link.url === pathName && 'bg-n-1 text-n-2'}`}
		>
			{link.title}
		</Link>
	);
};

export default Navlink;
