import React from 'react';
import { NavLink } from 'react-router-dom';
import CN from 'classnames';
export function Card(props) {
	return (
		<section className='mx-auto lg:max-w-screen-lg sm:w-screen group'>
			<NavLink to={props.to}>
				<div
					style={{
						backgroundImage: `url(${props.url})`,
					}}
					className='w-full bg-center bg-cover md:h-96 sm:h-64 filter hover:blur-md'
				>
					<div
						className={CN(
							'flex flex-col justify-between w-full h-full text-white group-hover:bg-transparent',
							props.bg
						)}
					>
						<div className='tracking-tighter sm:text-6xl sm:font-black sm:p-1 md:text-9xl md:px-5 lg:text-11xl group-hover:text-transparent'>
							{props.text}
						</div>
						<div className='p-3 font-light md:text-5xl sm:text-2xl group-hover:text-transparent'>
							{props.subtitle}
						</div>
					</div>
				</div>
			</NavLink>
		</section>
	);
}
