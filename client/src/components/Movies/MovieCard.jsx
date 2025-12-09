import { useNavigate } from 'react-router';
import MovieLike from './MovieLike';
import MovieRating from './MovieRating';
import { useUserContext } from '../../contexts/UserContext';
import useCollections from '../../hooks/useWatchlistCollections';
import useTopTenCollection from '../../hooks/useTopTenCollection';

export default function MovieCard({ title, poster, director, year, rating, id, movies }) {
	const { addToTopTens } = useTopTenCollection();
	const navigate = useNavigate();
	const { addToCollection } = useCollections();
	const user = useUserContext().user;

	const clickHandler = () => {
		navigate(`/movies/${id}`);
		console.log(id);
	};

	const addToWatchlistHandler = async () => {
		console.log('add');
		await addToCollection(id);
	};
	const addToTopTensHandler = async () => {
		await addToTopTens(id);
	};
	return (
		<div
			key={title}
			className='min-w-60 max-w-70 max-h-200 transition-all duration-300 ease-in-out hover:border-amber-400 hover:bg-amber-200/20 hover:shadow-amber-300/70  bg-black/70 m-3 text-center rounded-xl  shadow-amber-300/50 shadow-2xl border-amber-200/80 border-2 border-solid '
		>
			<h1 className='text-[clamp(1.2rem,1.2vw,1.6rem)] font-bold m-4'>{title}</h1>
			<img src={poster} onClick={clickHandler} className='hover:cursor-pointer w-300 h-90 object-cover size-300' />
			<h2 className='m-1 mt-2 font-bold'>{director}</h2>
			<h2 className='m-1 text-[14px]'>{year}</h2>
			<h2 className='m-1 text-[14px]'>{movies}</h2>
			<div className='space-x-1'>
				<MovieRating rating={rating} />
				<MovieLike />
				{user && (
					<div className='flex flex-col'>
						<button
							onClick={addToTopTensHandler}
							className='text-amber-400 hover:text-amber-500 mb-5 hover:cursor-pointer'
						>
							Add to Top10's
						</button>
						<button
							onClick={addToWatchlistHandler}
							className='text-amber-400 hover:text-amber-500 mb-1 hover:cursor-pointer'
						>
							Add to watchlist
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
