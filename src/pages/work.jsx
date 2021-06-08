import React from 'react';
import { NavLink } from 'react-router-dom';

export function Work() {
	return (
		<>
			<section className='flex flex-col max-w-screen-md mb-40 sm:px-4 md:mx-auto'>
				<article className='my-40 bg-gray-100 sm:p-4 md:p-6 md:w-80 md:self-end'>
					<span className='pr-1 sm:text-base md:text-2xl'>&#10168;</span>
					<span className='sm:text-base md:text-2xl'>Digital</span>
					<p className='pt-2 font-serif sm:text-sm md:text-base'>
						Adj. mid-15c., “pertaining to numbers below ten;” 1650s, “pertaining
						to fingers,” from Latin <i>digitalis</i>, from digitus “finger or
						toe” (see digit). The numerical sense is because numerals under 10
						were counted on fingers. Meaning “using numerical digits” is from
						1938, especially of computers which run on data in the form of
						digits (opposed to <i>analogue</i>) after c. 1945. In reference to
						recording or broadcasting, from 1960.
					</p>
				</article>
				<div className='flex flex-col w-full space-y-4'>
					<NavLink
						to='/work/yape'
						className='flex items-end self-end justify-end p-4 bg-blue-300 md:w-7/12 h-96 group hover:bg-blue-200'
					>
						<p className='text-4xl font-bold text-blue-800 group-hover:text-blue-400'>
							Yape
						</p>
					</NavLink>
					<NavLink
						to='/work/mrbin'
						className='flex items-end justify-end w-7/12 p-4 bg-green-300 h-96 group hover:bg-green-200'
					>
						<p className='text-4xl font-bold text-green-800 group-hover:text-green-600'>
							Waste Sorting
						</p>
					</NavLink>
				</div>
			</section>
		</>
	);
}
