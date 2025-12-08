import { useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config';
import { useNavigate, useParams } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';

export default function MovieDetails() {
	const navigate = useNavigate();
	const id = useParams().id;
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`${SU_MOVIES}/${id}`)
			.then((res) => res.json())
			.then((movie) => setMovie(movie))
			.catch((err) => alert(err.message));
	}, [id]);

	console.log(movie);
	const authorId = movie._ownerId;
	const userId = useUserContext().user?.id;
	const isOwner = authorId === userId;

	const { user } = useUserContext();
	const auth = user?.accessToken;

	const deleteHandler = async () => {
		const response = await fetch(`${SU_MOVIES}/${id}`, { method: 'DELETE', headers: { 'x-authorization': auth } });
		console.log(response);
		navigate('/');
		return response.status;
	};

	const editHandler = () => {
		navigate(`/movies/${id}/edit`);
		return movie;
	};

	return (
		<div className='flex flex-row text-center z-50 bg-amber-200/10 m-5 rounded-xl shadow-2xl '>
			<img src={movie.poster} className='justify-content-center w-100 h-150 object-cover size-300' />
			<div className='flex flex-col gap-5 text-center z-50'>
				<h2 className='text-4xl font-extrabold tracking-wider m-2 mt-5  '>{movie.title}</h2>
				<div key={movie.title} className='max-w-300 max-h-300 transition-all duration-300 ease-in-outmin-w-60'>
					<h2 className='text-[14px] mb-1'>{movie.year}</h2>
					<h2 className='m-1 mt-2 font-bold'>Director: {movie.director}</h2>
					<h2 className='m-1 text-[14px]'>Rating: {movie.rating}</h2>
					<h2 className='m-1 text-[14px]'>Genre: {movie.genre}</h2>
					<h2 className='m-1 text-[14px]'>Awards: {movie.awards}</h2>
					<h2 className='m-1 text-[14px]'>Country: {movie.country}</h2>
					<h2 className='m-1 text-[14px]'>Actors: {movie.actors}</h2>
					<h2 className='m-1 text-[14px]'>Plot: {movie.plot}</h2>
					<h2 className='m-1 text-[14px]'>Box Office: {movie.boxOffice}</h2>

					{isOwner && (
						<div className='flex justify-center space-x-1'>
							<button
								onClick={editHandler}
								type='button'
								className='max-w-50 flex w-full justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8'
							>
								Edit
							</button>
							<button
								onClick={deleteHandler}
								type='button'
								className='max-w-50 flex w-full justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8'
							>
								Delete
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
