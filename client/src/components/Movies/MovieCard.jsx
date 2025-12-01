export default function MovieCard({ title, imageUrl }) {
	return (
		<div key={title} className='min-w-60 bg-black/70 m-5 text-center rounded-xl m-2 sm:py-1'>
			<h1 className='m-2 text-[clamp(1rem,1.2vw,2rem)] font-bold m-4'>{title}</h1>
			<img src={imageUrl} className='w-200 h-80 object-cover size-50' />
			<h2>Director</h2>
			<h2>Year</h2>
		</div>
	);
}
