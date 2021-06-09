import React from 'react';
import { NavLink } from 'react-router-dom';

export function Card(props) {
	return (
		<NavLink to={props.to} className='w-full pb-8'>
			<div
				style={{
					backgroundImage: `url(${props.url})`,
				}}
				className='w-full bg-cover h-96 hover:bg-opacity-40'
			>
				<div className='flex items-center justify-center w-full h-full font-bold text-white bg-gray-900 bg-opacity-60 hover:bg-opacity-80 text-8xl '>
					{props.text}
				</div>
			</div>
		</NavLink>
	);
}
