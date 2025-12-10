import { useEffect, useState } from 'react';
import useWatchlistCollections from '../../hooks/useWatchlistCollections';
import MyWachlistMovieCard from './MyWatchlistMovieCard';

export default function MyWacthlistCard() {
	const { getMyWatchlist } = useWatchlistCollections();
	const [MyWatchlist, setMyWatchlist] = useState([]);

	useEffect(() => {
		const getMyWatclist = async () => {
			const data = await getMyWatchlist();
			const formattedData = Object.values(data);
			setMyWatchlist(formattedData);
		};

		getMyWatclist();
	}, []);

	const movieList = MyWatchlist.map((item) => item.movie);
	console.log(movieList);
	return (
		<div className=' max-w-200  transition-all duration-300 ease-in-out hover:border-amber-00 hover:bg-black/50 hover:shadow-amber-300/70 min-w-60 bg-black/70 m-5 text-center rounded-xl sm:py-1 shadow-amber-300/50 shadow-2xl border-amber-200/80 border-2 border-solid'>
			<h1 className='text-[clamp(1.2rem,1.2vw,1.6rem)] font-bold m-4'>Watchlist</h1>

			{movieList.map((movie) => (
				<MyWachlistMovieCard key={movie._id} id={movie._id} title={movie.title} poster={movie.poster} />
			))}
		</div>
	);
}
