import React from 'react';
import { NavLink } from 'react-router-dom';

export function Card(props) {
	return (
		<section className='mx-auto lg:max-w-screen-lg sm:w-screen'>
			<NavLink to={props.to}>
				<div
					style={{
						backgroundImage: `url(${props.url})`,
					}}
					className='w-full bg-cover md:h-96 sm:h-64 filter hover:blur-md'
				>
					<div className='flex flex-col justify-between w-full h-full text-white bg-gray-500 bg-opacity-70 hover:bg-opacity-20'>
						<div className='tracking-tighter sm:text-6xl sm:font-black sm:p-1 md:text-9xl md:px-3 lg:text-11xl'>
							{props.text}
						</div>
						<div className='p-3 font-light md:text-5xl sm:text-2xl'>
							{props.subtitle}
						</div>
					</div>
				</div>
			</NavLink>
		</section>
	);
}
