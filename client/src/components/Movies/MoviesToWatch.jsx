import { use, useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config.js';

import MovieCard from './MovieCard.jsx';
import { Link } from 'react-router';

export default function MoviesToWatch() {
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
	const fiveMovies = movies.slice(0, 5);

	return (
		<div className='text-center'>
			<h1 className='text-5xl font-extrabold tracking-wide m-5  '>MOVIES TO WATCH</h1>
			<div className='inline-flex gap-1 m-10'>
				{fiveMovies.map((movie) => (
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
			<h2 className='mt-5 text-center text-1xl font-bold tracking-tight'>
				You have watched all this movies? <br />
				<Link to='/catalog' className='mt-2 text-white hover:text-amber-300 text-2xl '>
					See more
				</Link>
			</h2>
		</div>
	);
}
