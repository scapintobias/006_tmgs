import React from 'react';

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
