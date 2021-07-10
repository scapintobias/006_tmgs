import React from 'react';
import { Card } from '../components/card';

export function Work() {
	return (
		<main className='flex flex-col'>
			<div className='self-end px-5 py-3 mt-32 bg-gray-100 lg:w-5/12 t:w-1/2 sm:w-full'>
				<div className='mb-4 text-gray-800'>
					<span className='pr-1 text-3xl'>&#10168;</span>
					<span className='text-3xl font-bold '>Digital</span>
				</div>
				<p className='text-sm'>
					Adj. mid-15c., “pertaining to numbers below ten;” 1650s, “pertaining
					to fingers,” from Latin <i>digitalis</i>, from digitus “finger or toe”
					(see digit). The numerical sense is because numerals under 10 were
					counted on fingers. Meaning “using numerical digits” is from 1938,
					especially of computers which run on data in the form of digits
					(opposed to <i>analogue</i>) after c. 1945. In reference to recording
					or broadcasting, from 1960.
				</p>
			</div>
			{/* <h2>Disclaimer</h2>
			<p>
				This is <b>not</b> a UI portfolio. So if you were looking for flashy
				animations and bright-coloured screens—I'm afraid you are very well in
				the wrong place.
			</p>
			<p>
				If you were looking instead for research patterns, findings, methods
				and—in general—a lot of writing and storytelling, then maybe yes, you
				are in the right place.
			</p>
			<p>
				Whether you find yourself more accustomed with the first category (UI)
				please look somewhere else, I won't be offended. You would bore yourself
				to—maybe not death—but you'll surely cure your insomnia.
			</p>
			<p>
				For the relentless curious bunch that stayed until the end
				credits—hurray—please scroll and enter the case study that better suits
				your interest.
			</p>
			<p>Be my guest.</p> */}
			<section className='my-32 space-y-3 '>
				<h1 className='my-10'>Case Studies:</h1>
				<Card
					url='/img/yape__cover.jpeg'
					to='/work/yape'
					type='ux research'
					title='Yape'
					subtitle='Human-Robot Interaction'
					bg='bg-yellow-500'
				/>

				{/* <Card
					url='/img/pharma__cover.jpeg'
					to='/work/pharma'
					text='Pharma'
					subtitle='Medicine packaging'
					bg='bg-ruby-400'
				/> */}
				{/* <Card
					url='/img/blobs__cover.jpeg'
					to='/work/blobs'
					text='Blobs'
					subtitle='Analytics for physical ads'
					bg='bg-purple-500'
				/>
				<Card
					url='/img/mrbin__cover.jpeg'
					to='/work/mrbin'
					text='MrBin'
					subtitle='Let’s talk trash'
					bg='bg-green-600'
				/> */}
			</section>{' '}
		</main>
	);
}
