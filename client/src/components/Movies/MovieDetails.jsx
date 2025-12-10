import { useEffect, useState } from 'react';
import { SU_MOVIES } from '../../config';
import { useNavigate, useParams } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';
import useTopTenCollection from '../../hooks/useTopTenCollection';
import useTopTenCheck from '../../hooks/useTopTenCheck';

export default function MovieDetails() {
	const { addToTopTens, removeFromTopTens } = useTopTenCollection();
	const navigate = useNavigate();
	const id = useParams().id;
	const [movie, setMovie] = useState({});
	let isInUserList = useTopTenCheck({ movieId: id });

	console.log(`isInUserList is: ${isInUserList}`);

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

	const addToTopTensHandler = () => {
		isInUserList.isInUserList = true;
		const add = async () => {
			await addToTopTens(id);
		};
		add();
	};

	const removeFromTopTensHandler = () => {
		isInUserList.isInUserList = false;
		const remove = async () => {
			await removeFromTopTens(id);
		};
		remove();
	};

	const addToWatchlistHandler = () => {
		console.log('add');
	};

	const deleteHandler = async () => {
		const confirmed = window.confirm('Are you sure you want to delete this item?');

		if (!confirmed) return;

		const response = await fetch(`${SU_MOVIES}/${id}`, { method: 'DELETE', headers: { 'x-authorization': auth } });
		console.log(response);
		navigate('/');
		return response.status;
	};

	const editHandler = () => {
		navigate(`/movies/${id}/edit`);
		return movie;
	};

	console.log(`isInUserList is: ${isInUserList.isInUserList}`);
	return (
		<div className='flex flex-row text-center z-30 bg-amber-200/10 m-5 rounded-xl shadow-2xl '>
			<img
				src={movie.poster}
				className='relative z-30 justify-content-center w-100 h-150 object-cover size-300 rounded-xl'
			/>
			<div className='flex flex-col gap-5 text-center z-30'>
				<h2 className='z-50 text-4xl font-extrabold  m-2 mt-5 '>{movie.title}</h2>
				<div
					key={movie.title}
					className='bg-black/50 text-center
					shadow-2xl max-w-300 max-h-300 transition-all duration-300 ease-in-outmin-w-60 '
				>
					<h2 className='m-5 mt-5 font-bold'>Director: {movie.director}</h2>
					<h2 className='text-[14px] mb-1 '>{movie.year}</h2>
					<h2 className='m-1 text-[14px]'>Rating: {movie.rating}</h2>
					<h2 className='m-1 text-[14px]'>Genre: {movie.genre}</h2>
					<h2 className='m-1 text-[14px]'>Awards: {movie.awards}</h2>
					<h2 className='m-1 text-[14px]'>Country: {movie.country}</h2>
					<h2 className='m-1 text-[14px]'>Actors: {movie.actors}</h2>
					<h2 className='m-5 max-w-[60ch] m-1 text-[14px]'>Plot: {movie.plot}</h2>
					<h2 className='m-1 text-[14px]'>Box Office: {movie.boxOffice}</h2>

					<div className='flex flex-col'>
						{user && (
							<div className='flex justify-center space-x-1 gap-2 mt-5 mb-10'>
								{isInUserList.isInUserList ? (
									<button
										onClick={removeFromTopTensHandler}
										type='button'
										className='max-w-40 flex w-full justify-center rounded-md bg-yellow-500/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-400/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8 hover:cursor-pointer shadow-amber-400/100  shadow-2xl '
									>
										Remove from Top10's
									</button>
								) : (
									<button
										onClick={addToTopTensHandler}
										type='button'
										className='max-w-40 flex w-full justify-center rounded-md bg-yellow-500/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-400/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8 hover:cursor-pointer shadow-amber-400/100  shadow-2xl '
									>
										Add to Top10's
									</button>
								)}
								<button
									onClick={addToWatchlistHandler}
									type='button'
									className='max-w-40 flex w-full justify-center rounded-md bg-yellow-500/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-400/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8 hover:cursor-pointer shadow-amber-400/100  shadow-2xl '
								>
									Add to watchlist
								</button>
							</div>
						)}
						{isOwner && (
							<div className='flex justify-center space-x-1 gap-2 mb-5'>
								<button
									onClick={editHandler}
									type='button'
									className='max-w-30 flex w-full justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8'
								>
									Edit
								</button>
								<button
									onClick={deleteHandler}
									type='button'
									className='max-w-30 flex w-full justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 min-h-8'
								>
									Delete
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
