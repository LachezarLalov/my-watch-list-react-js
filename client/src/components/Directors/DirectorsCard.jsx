export default function DirectorsCard({ name, imageUrl }) {
	return (
		// <div className='bg-white/20 m-5 text-center text-white'>
		// 	<h1>{name}</h1>
		// 	<img src={imageUrl} className='w-20 h-20 object-cover' />
		// </div>

		<div key={name} className='min-w-50 bg-black/70 m-5 text-center rounded-xl m-2 sm:py-1'>
			<h1 className='m-2 text-[clamp(1rem,1vw,1rem)] font-bold m-3'>{name}</h1>
			<img src={imageUrl} className='object-cover size-50' />
		</div>
	);
}
