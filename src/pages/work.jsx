import React from 'react';
import { Card } from '../components/components';

export function Work() {
	return (
		<>
			<div className='static h-12' />
			<section className='flex flex-col max-w-screen-lg mx-auto md:px-0 sm:px-4'>
				<div className='self-end my-32 lg:w-5/12 md:w-1/2 sm:w-full'>
					<div className='mb-4'>
						<span className='pr-1 sm:text-base md:text-2xl'>&#10168;</span>
						<span className='sm:text-base md:text-2xl'>Digital</span>
					</div>
					<p>
						Adj. mid-15c., “pertaining to numbers below ten;” 1650s, “pertaining
						to fingers,” from Latin <i>digitalis</i>, from digitus “finger or
						toe” (see digit). The numerical sense is because numerals under 10
						were counted on fingers. Meaning “using numerical digits” is from
						1938, especially of computers which run on data in the form of
						digits (opposed to <i>analogue</i>) after c. 1945. In reference to
						recording or broadcasting, from 1960.
					</p>
				</div>
				<h1 className='self-start w-full px-3 mb-3 tracking-tighter'>
					Case Studies
				</h1>
			</section>

			<section className='mb-40 space-y-4 tracking-tighter'>
				<Card
					url='/img/yape__cover.jpeg'
					to='/work/yape'
					text='Yape'
					subtitle='Human-Robot Interaction'
				/>
				<Card url='/img/pharma__cover.jpeg' to='/work/pharma' text='Pharma' />
				<Card url='/img/blimp__cover.jpeg' to='/work/blimp' text='Blimp' />
				<Card url='/img/mrbin__cover.jpeg' to='/work/mrbin' text='MrBin' />
			</section>
		</>
	);
}
