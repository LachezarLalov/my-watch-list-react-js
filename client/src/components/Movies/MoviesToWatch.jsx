import { useEffect, useState } from 'react';
import { SU_DATA } from '../../config.js';

import MovieCard from './MovieCard.jsx';

export default function MoviesToWatch() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(`${SU_DATA}/movies`)
			.then((res) => res.json())
			.then((movies) => setMovies(Object.values(movies)))
			.catch((err) => alert(err.message));
	}, []);

	return (
		<div className='text-center'>
			<h1 className='text-6xl font-black m-7'>MOVIES TO WATCH</h1>
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
		</div>
	);
}
