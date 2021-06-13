import React from 'react';

export function Title(props) {
	return (
		<div>
			<div className='absolute flex flex-col items-center justify-end w-screen h-screen pb-5 text-white'>
				<div className='max-w-3xl pb-5 md:text-3xl sm:text-xl'>
					{props.subtitle}
				</div>
				<div className='text-4xl animate-bounce'>&#9759;</div>
			</div>
			<div
				className='w-screen h-screen overflow-hidden bg-center bg-cover'
				style={{
					backgroundImage: `url(${props.src})`,
				}}
			>
				<div
					className='flex items-center justify-center w-full h-full font-sans font-black tracking-tighter text-white uppercase bg-gray-900 bg-opacity-50 md:pr-5 sm:pr-1'
					style={{ fontSize: props.size }}
				>
					{props.children}
				</div>
			</div>
		</div>
	);
}
