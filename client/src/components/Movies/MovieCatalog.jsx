import { useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config.js';

import MovieCard from './MovieCard.jsx';

export default function MovieCatalog() {
	const [movies, setMovies] = useState([]);
	const [searchParams, setSearchParams] = useState('sortBy=_createdOn desc');

	const urlParams = searchParams;
	useEffect(() => {
		fetch(`${SU_MOVIES}?${urlParams.toString()}`)
			.then((res) => res.json())
			.then((movies) => setMovies(Object.values(movies)))
			.catch((err) => alert(err.message));
	}, [urlParams]);

	if (movies.length === 0) {
		return <h1 className='text-2xl font-extrabold tracking-wide m-5  '>Sorry, no movies to watch at the moment</h1>;
	}

	//TODO newst movies and random movies

	return (
		<div className='text-center z-50'>
			<h1 className='mt-12 text-3xl font-extrabold tracking-wide m-3  '>CATALOG</h1>
			<div className='flex flex-row justify-center gap-5 '>
				<button
					onClick={() => setSearchParams('sortBy=_createdOn desc')}
					className=' hover:text-amber-300 font-semibold
						transition-all duration-300 ease-in-out hover:shadow-amber-600/100 '
				>
					Newest
				</button>
				<button
					onClick={() => setSearchParams('sortBy=_createdOn')}
					className=' hover:text-amber-300 font-semibold
						transition-all duration-300 ease-in-out hover:shadow-amber-600/100 '
				>
					Oldest
				</button>
				<button
					onClick={() => setSearchParams('sortBy=rating desc')}
					className=' hover:text-amber-300 font-semibold
						transition-all duration-300 ease-in-out hover:shadow-amber-600/100 '
				>
					Top Rated
				</button>
			</div>
			<div className='flex flex-wrap  mt-15 gap-3'>
				{movies.map((movie) => (
					<MovieCard
						key={movie._id}
						id={movie._id}
						title={movie.title}
						poster={movie.poster}
						director={movie.director}
						year={movie.year}
						rating={movie.rating}
					/>
				))}
			</div>
		</div>
	);
}
