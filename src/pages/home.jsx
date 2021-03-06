import React from 'react';
import { Card } from '../components/card';

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

			<main className='sm:pt-48 md:pt-80 xl:pt-96'>
				<div className='font-serif sm:text-2xl md:text-4xl'>
					<div>Tobias here.</div>
					<div className='py-5'>
						<span className='font-black'>Product Designer</span>&nbsp;from
						northern Italy.
					</div>
					<div className='pb-5 leading-tight'>
						I combine the iterative process of design thinking with a&nbsp;
						<nobr>human-centered</nobr> approach to bring value and solve
						complex problems.
					</div>
					<div className='pt-5 text-4xl text-center t:invisible'>&#9759;</div>
				</div>
				<div className='flex flex-col'>
					<div className='self-end px-5 py-3 bg-gray-100 sm:mt-24 md:mt-32 lg:w-5/12 t:w-1/2 sm:w-full'>
						<div className='mb-4 text-gray-800'>
							<span className='pr-1 text-3xl'>&#10168;</span>
							<span className='text-3xl font-bold '>Digital</span>
						</div>
						<p className='text-sm'>
							Adj. mid-15c., “pertaining to numbers below ten;” 1650s,
							“pertaining to fingers,” from Latin <i>digitalis</i>, from digitus
							“finger or toe” (see digit). The numerical sense is because
							numerals under 10 were counted on fingers. Meaning “using
							numerical digits” is from 1938, especially of computers which run
							on data in the form of digits (opposed to <i>analogue</i>) after
							c. 1945. In reference to recording or broadcasting, from 1960.
						</p>
					</div>
				</div>
				<section className='my-32'>
					<h1 className='mb-10'>Case Studies:</h1>
					<Card
						url='/img/yape__cover.jpeg'
						to='/yape'
						type='ux research'
						title='Yape'
						subtitle='Human-Robot Interaction'
						bg='from-yellow-500 bg-gradient-to-r to-transparent hover:to-yellow-700'
					/>
				</section>
				<section className='mb-32'>
					<h1 className='mb-10'>Design Systems:</h1>
					<Card
						url='/img/droid__cover.png'
						to='/yapesrl'
						type='design system'
						title='Yape'
						subtitle='Some droid needed a repaint'
						bg='from-blue-500 bg-gradient-to-r to-transparent hover:to-blue-700'
					/>
				</section>
			</main>
		</React.Fragment>
	);
}
