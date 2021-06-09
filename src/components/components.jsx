import React from 'react';
import { NavLink } from 'react-router-dom';

export function Title(props) {
	return (
		<div>
			<div className='w-screen h-screen overflow-hidden'>
				<div
					className='absolute flex items-center justify-center w-screen h-full overflow-hidden font-sans font-black tracking-tighter text-white uppercase bg-gray-900 bg-opacity-50'
					style={{ fontSize: '30vw' }}
				>
					{props.children}
				</div>
				<img
					src={props.src}
					alt={props.text}
					className='object-cover w-full h-full overflow-hidden'
				/>
			</div>
		</div>
	);
}

export function Card(props) {
	return (
		<NavLink to='/work/yape' className='w-full'>
			<div
				style={{
					backgroundImage: `url(${props.url})`,
				}}
				className='w-full bg-cover h-96 hover:bg-opacity-60'
			>
				<div className='flex items-center justify-center w-full h-full font-bold text-white bg-gray-800 bg-opacity-50 hover:bg-opacity-75 hover:text-gray-200 text-8xl '>
					YAPE
				</div>
			</div>
		</NavLink>
	);
}
