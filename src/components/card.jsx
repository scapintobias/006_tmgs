import React from 'react';
import { NavLink } from 'react-router-dom';
import CN from 'classnames';

export function Card(props) {
	return (
		<section className='group'>
			<NavLink to={props.to}>
				<div
					style={{
						backgroundImage: `url(${props.url})`,
					}}
					className='w-full bg-center bg-cover md:h-screen/3 sm:h-64 '
				>
					<div
						className={CN(
							'flex flex-col justify-between w-full h-full text-white pt-1 pb-3 px-2 ',
							props.bg
						)}
					>
						<div className='font-normal tracking-widest uppercase md:text-2xl sm:text-sm'>
							{props.type}
						</div>
						<div className='font-black tracking-tighter sm:text-6xl md:text-9xl lg:text-11xl'>
							{props.title}
						</div>
						<div className='font-light tracking-tighter md:text-5xl sm:text-lg'>
							{props.subtitle}
						</div>
					</div>
				</div>
			</NavLink>
		</section>
	);
}
