import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from '../components/components';

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
				<div className='space-y-4'>
					<Card url='https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80' />
					<NavLink
						to='/work/mrbin'
						className='flex items-end justify-end w-7/12 p-4 bg-green-300 h-96 group hover:bg-green-200'
					>
						<div className='text-4xl font-bold text-green-800 group-hover:text-green-600'>
							Waste Sorting
						</div>
					</NavLink>
				</div>
			</section>
		</>
	);
}
