import { useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config.js';

import MovieCard from './MovieCard.jsx';
import { Link } from 'react-router';

export default function MovieCatalog() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`${SU_MOVIES}`)
			.then((res) => res.json())
			.then((movies) => setMovies(Object.values(movies)))
			.catch((err) => alert(err.message));
	}, []);

	if (movies.length === 0) {
		return <h1 className='text-2xl font-extrabold tracking-wide m-5  '>Sorry, no movies to watch at the moment</h1>;
	}

	//TODO newst movies and random movies

	return (
		<div className='text-center z-50'>
			<h1 className='mt-12 text-3xl font-extrabold tracking-wide m-3  '>CATALOG</h1>
			<div className='flex flex-wrap  mt-15 gap-0'>
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
