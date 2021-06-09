import React from 'react';
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

				<Card url='/img/yape__cover.jpeg' to='/work/yape' text='Yape' />
				<Card url='/img/blimp__cover.jpeg' to='/work/blimp' text='Blimp' />
				<Card url='/img/mrbin__cover.jpeg' to='/work/mrbin' text='MrBin' />
			</section>
		</>
	);
}
