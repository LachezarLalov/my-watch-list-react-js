import { useEffect, useState } from 'react';
import useWatchlistCollections from './useWatchlistCollections';

export default function useWatchlistCheck(id) {
	const { getMyWatchlist } = useWatchlistCollections();
	const [isInWatchlist, setIsInWatchlist] = useState(false);
	const currentMovieId = Object.values(id).at(0);

	useEffect(() => {
		const checkMovie = async () => {
			const data = await getMyWatchlist();
			if (!data) return;

			const collectionsArray = await Object.values(data);

			for (let i = 0; i < collectionsArray.length; i++) {
				if (collectionsArray[i].movieId === currentMovieId) {
					setIsInWatchlist(true);
				}
			}
		};

		checkMovie();
	}, []);

	return { isInWatchlist };
}
