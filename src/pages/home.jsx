import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
	return (
		<React.Fragment>
			<div className='absolute right-0 z-0 min-h-full overflow-hidden'>
				<div className='relative pl-6 font-sans text-white uppercase transform bg-red-600 -rotate-12 md:text-xl md:py-4 sm:py-2 lg:pr-96 md:mt-40 md:pr-32 sm:pr-12 sm:text-xs sm:mt-16 -right-6'>
					<span className='pr-3 font-mono md:text-2xl sm:text-base'>
						&#10043;
					</span>
					<span className='font-light tracking-widest'>currently for hire</span>
				</div>
			</div>
			<section className='absolute flex flex-col items-center justify-center w-screen px-3 h-whole'>
				<article className='z-10 max-w-screen-md font-serif sm:pt-20 sm:text-sm md:text-2xl'>
					<p>
				Tobias here.
					</p>
					<p className='pb-5'>
						<span className='font-black'>UX Architect</span>&nbsp;from northern
						Italy.
					</p>
					<p className='pb-5'>
					I combine the iterative process of design thinking with a&nbsp;
					<nobr>human-centered</nobr> approach to complex problems.</p>
					

						<NavLink to='/work' className='px-3 py-2 font-sans text-sm font-light uppercase bg-gray-100 rounded-full hover:bg-gray-800 hover:text-white'>
						Check my work
						</NavLink>


				</article>
			</section>
		</React.Fragment>
	);
}
