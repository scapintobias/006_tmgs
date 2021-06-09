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
		<div className='z-40 md:hidden'>
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
						className='pl-8 text-4xl hover:text-gray-400'
						to='/'
						onClick={closePanel}
					>
						Home
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='pl-8 text-4xl hover:text-gray-400'
						to='/work'
						onClick={closePanel}
					>
						Work
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='pl-8 text-4xl hover:text-gray-400'
						to='/about'
						onClick={closePanel}
					>
						About
					</NavLink>
					<NavLink
						activeClassName='text-red-600'
						className='pl-8 text-4xl hover:text-gray-400'
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
			<div className='fixed z-40 flex flex-row items-center justify-between w-screen h-12 bg-white'>
				{/* logo */}
				<NavLink className='flex items-center hover:text-gray-500 group' to='/'>
					<div className='flex items-center justify-center w-8 h-8 m-2 text-3xl text-white bg-gray-800 group-hover:bg-gray-500'>
						&#8251;
					</div>
					{/* Type */}

					<div className='pt-2 text-4xl tracking-tight noe '>Tobias M GS</div>
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
