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
					<div>
						<span className='font-sans text-2xl'>&#8251;</span> Tobias here.
					</div>
					<div className='pb-5'>
						<span className='font-black'>UX Researcher</span>&#8197;and&#8197;
						<span className='font-black'>UX Designer</span>&#8197;from northern
						Italy.
					</div>
					I combine the iterative process of design thinking with a&nbsp;
					<nobr>human-centered</nobr> approach to complex problems.
					<div className='flex items-center pt-12'>
						<div className='pr-4'>Check my work</div>
						<NavLink to='/work' className='pt-1 font-sans text-3xl'>
							&#x261E;
						</NavLink>
					</div>
				</article>
			</section>
		</React.Fragment>
	);
}
