import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Menu() {
	const [panelStyle, setPanelStyle] = useState('panel-closed');
	const [backdrop, setBackdrop] = useState('bgclosed');

	const closePanel = () => {
		setPanelStyle('panel-closed');
		setBackdrop('bgclosed');
	};

	const openPanel = () => {
		setPanelStyle('');
		setBackdrop('');
	};

	return (
		<div className='z-50 md:hidden'>
			<div
				className='text-gray-800 cursor-pointer md:px-2 sm:text-2xl sm:px-1 md:text-3xl animate-spin'
				onClick={openPanel}
			>
				&#10033; {/*&#9021;*/}
			</div>

			<div
				className={`${backdrop} absolute top-0 right-0 w-full h-screen transition-transform translate-x-full duration-200 bg-black opacity-60 `}
				onClick={closePanel}
			></div>

			<div className={`side-menu ${panelStyle} bg-gray-100`}>
				<nav className='flex flex-col h-full space-y-2 font-light text-gray-800 uppercase md:mt-10 sm:justify-center'>
					<NavLink
						className='hover:text-gray-400 md:pl-3 sm:pl-8'
						to='/'
						onClick={closePanel}
					>
						Home
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400 md:pl-3 sm:pl-8'
						to='/work'
						onClick={closePanel}
					>
						Work
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400 md:pl-3 sm:pl-8'
						to='/about'
						onClick={closePanel}
					>
						About
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400 md:pl-3 sm:pl-8'
						to='/contacts'
						onClick={closePanel}
					>
						Contacts
					</NavLink>
				</nav>
			</div>
		</div>
	);
}

export function Nav() {
	return (
		<React.Fragment>
			<div className='fixed z-40 flex flex-row items-center justify-between w-screen bg-white sm:h-8 md:h-12'>
				{/* logo */}
				<NavLink className='flex items-center hover:text-gray-500 group' to='/'>
					<div className='flex items-center justify-center m-2 text-3xl text-white bg-gray-800 sm:w-6 sm:h-6 sm:text-2xl sm:m-1 md:w-8 md:h-8 group-hover:bg-gray-500'>
						&#8251;
					</div>
					{/* Type */}

					<div className='tracking-tight md:text-4xl sm:text-lg noe md:pt-2 sm:pt-1'>
						Tobias M GS
					</div>
				</NavLink>
				<section className='items-start mr-3 space-x-4 text-sm uppercase sm:hidden md:block'>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400'
						to='/work'
					>
						Work
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400'
						to='/about'
					>
						about
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='hover:text-gray-400'
						to='/contacts'
					>
						contacts
					</NavLink>
				</section>
				<Menu />
			</div>
		</React.Fragment>
	);
}

export function ClearFix() {
	return <div style={{ height: '60px' }} className=' static' />;
}
