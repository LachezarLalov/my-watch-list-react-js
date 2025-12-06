import { useEffect, useState } from 'react';
import { SU_DATA, SU_MOVIES } from '../../config.js';

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

	return (
		<div className='text-center'>
			<h1 className='text-5xl font-extrabold tracking-wide m-5  '>MOVIES TO WATCH</h1>
			<div className='inline-flex gap-1 m-10'>
				{movies.map((movie) => (
					<MovieCard
						key={movie.title}
						title={movie.title}
						imageUrl={movie.imageUrl}
						director={movie.director}
						year={movie.year}
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
