import { SU_WATCHLISTS } from '../config';
import { useUserContext } from '../contexts/UserContext';

export default function useWatchlistCollections() {
	const currentUser = useUserContext().user;

	const addToWatchlist = async (movieId) => {
		const result = await fetch(`${SU_WATCHLISTS}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-authorization': currentUser.accessToken,
			},
			body: JSON.stringify({
				userId: currentUser._id,
				ownerName: currentUser.username,
				movieId: movieId,
			}),
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));

		return result;
	};

	const getMyWatchlist = async () => {
		const urlParams = new URLSearchParams({ where: `_ownerId="${currentUser.id}"`, load: `movie=movieId:movies` });

		const result = await fetch(`${SU_WATCHLISTS}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'x-authorization': currentUser.accessToken,
			},
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));
		console.log(result);
		return result;
	};

	const getAllWatchlists = async () => {
		console.log(`getCollection`);
		const params = new URLSearchParams({
			load: 'movie=movieId:movies,owner=_ownerId:users',
		});

		const result = await fetch(`${SU_WATCHLISTS}?${params.toString()}`, {
			method: 'GET',
			headers: {
				'x-authorization': currentUser.accessToken,
			},
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));

		console.log(`result is: ${result}`);

		const groupedByUser = result.reduce((acc, item) => {
			const userId = item._ownerId;
			const ownerName = item.owner?.username;

			if (!acc[userId]) {
				acc[userId] = {
					ownerName,
					movies: [],
				};
			}

			acc[userId].movies.push(item);
			return acc;
		}, {});

		console.log(groupedByUser);

		return groupedByUser;
	};

	return { addToWatchlist, getMyWatchlist, getAllWatchlists };
}
