import { useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config.js';

import MovieCard from './MovieCard.jsx';
import { Link } from 'react-router';

export default function MoviesToWatch() {
	const [movies, setMovies] = useState([]);
	const [moviesCount, setMoviesCount] = useState(0);

	useEffect(() => {
		fetch(SU_MOVIES)
			.then((res) => res.json())
			.then((data) => {
				const movies = Object.values(data);
				setMoviesCount(movies.length)

				const shuffled = movies.sort(() => 0.5 - Math.random());

				setMovies(shuffled);
			});
	}, []);

	const randomFiveHandler = () => {
		const shuffled = [...movies].sort(() => 0.5 - Math.random());
		setMovies(shuffled);
	};

	if (movies.length === 0) {
		return <h1 className='text-2xl font-extrabold tracking-wide m-5  '>Sorry, no movies to watch at the moment</h1>;
	}

	//TODO newst movies and random movies
	const fiveMovies = movies.slice(0, 5);

	return (
		<div className='text-center'>
			<h1 className='text-5xl mt-25 font-extrabold tracking-wide m-5  '>MOVIES TO WATCH </h1>
			<div className='inline-flex gap-1  -mt-5'> {moviesCount} movies </div>
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
			<div className='flex flex-col'>
				<button
					type='onClick'
					onClick={randomFiveHandler}
					className='flex w-50 justify-center rounded-md bg-yellow-600/90  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 text-center mx-auto '
				>
					Random
				</button>
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
