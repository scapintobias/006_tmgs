import React from 'react';

export function Title(props) {
	return (
		<>
			<div className='text-sm text-gray-500 uppercase '>{props.type}</div>
			<div className='font-black tracking-tighter text-gray-800 md:text-9xl sm:text-7xl'>
				{props.title}
			</div>
			<div className='font-serif text-gray-800 md:pt-20 sm:pt-10 sm:text-xl md:text-2xl'>
				{props.subtitle}
			</div>

			<img className='pt-16' src={props.src} alt={props.title} />
		</>
	);
}
