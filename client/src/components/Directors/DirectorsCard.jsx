export default function DirectorsCard({ name, imageUrl, country }) {
	return (
		<>
			<div
				key={name}
				className='transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-amber-200/20 hover:shadow-amber-300/70 flex flex-col justify-between min-w-40 bg-black/70 m-5 text-center rounded-xl sm:py-1 shadow-amber-300/40 shadow-lg border-amber-200 border border-solid'
			>
				<h1 className='m-2 text-[clamp(1rem,1vw,1rem)] font-bold '>{name}</h1>
				<img src={imageUrl} className=' min-w-30 size-60 object-cover rounded-2xl' />
				<p className='text-[14px]'>{country}</p>
			</div>
		</>
	);
}
