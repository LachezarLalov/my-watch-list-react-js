import MovieLike from './MovieLike';
import MovieRating from './MovieRating';

export default function MovieCard({ title, imageUrl, director, year }) {
	return (
		<div
			key={title}
			className='transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-amber-200/20 hover:shadow-amber-300/70 min-w-60 bg-black/70 m-5 text-center rounded-xl sm:py-1 shadow-amber-300/50 shadow-2xl border-amber-200/80 border-2 border-solid'
		>
			<h1 className='text-[clamp(1.2rem,1.2vw,1.6rem)] font-bold m-4'>{title}</h1>
			<img src={imageUrl} className='w-300 h-80 object-cover size-300' />
			<h2 className='m-1 mt-2 font-bold'>{director}</h2>
			<h2 className='m-1 text-[14px]'>{year}</h2>
			<div class='space-x-1'>
				<MovieRating />
				<MovieLike />
			</div>
		</div>
	);
}
