import { useLinkClickHandler } from 'react-router';

export default function DirectorCard({ name, id, imageUrl, country,  }) {
	const clickHandler = useLinkClickHandler(`/directors/${id}`);
	return (
		<>
			<div
				key={name}
				onClick={clickHandler}
				className='backdrop-blur flex flex-col justify-around transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-amber-200/20 hover:shadow-amber-300/70 min-w-40 bg-black/70 m-5 text-center rounded-xl sm:py-1 shadow-amber-300/40 shadow-lg border-amber-200 border border-solid'
			>
				<img src={imageUrl} className='hover:cursor-pointer min-w-30 size-50 object-cover rounded-xl -mt-1' />
				<h1 className='hover:cursor-pointer m-2 text-[clamp(1rem,1vw,1rem)] font-bold '>{name}</h1>
				<p className='hover:cursor-pointer text-[14px]'>{country}</p>
			</div>
		</>
	);
}
