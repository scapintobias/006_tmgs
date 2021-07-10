import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav() {
	return (
<<<<<<< HEAD
		<React.Fragment>
			<div className='fixed z-40 flex flex-row items-center justify-between w-screen h-10 text-gray-800 bg-white border-b border-gray-200 border-opacity-50'>
				{/* logo */}
				<NavLink className='flex items-center hover:text-gray-500 group' to='/'>
					<div className='flex items-center justify-center m-1 text-3xl text-white bg-gray-800 sm:w-7 md:w-8 sm:h-7 md:h-8 group-hover:bg-gray-500'>
						&#8251;
					</div>
					{/* Type */}
=======
		<>
			<section className='flex justify-center '>
				<div className='fixed z-30 w-full bg-white md:h-10 sm:h-9' />
				<div className='fixed z-40 flex flex-row items-center justify-between w-full max-w-screen-lg mx-auto text-gray-800 '>
					{/* ####### LOGO ####### */}
>>>>>>> Mobile

					<NavLink
						className='flex items-center hover:text-gray-500 group'
						to='/'
					>
						<div className='flex items-center justify-center m-1 text-3xl text-white bg-gray-800 sm:w-7 md:w-8 sm:h-7 md:h-8 group-hover:bg-gray-500'>
							&#8251;
						</div>
					</NavLink>

					{/* ################### */}

					<section className='items-start pr-1 space-x-4 text-sm uppercase xl:pr-0'>
						<NavLink
							activeClassName='text-red-600'
							className='hover:text-gray-400'
							to='/about'
						>
							info
						</NavLink>
					</section>
				</div>
			</section>
		</>
	);
}
