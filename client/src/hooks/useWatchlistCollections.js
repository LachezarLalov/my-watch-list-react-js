import { SU_WATCHLISTS } from '../config';
import { useUserContext } from '../contexts/UserContext';

export default function useWatchlistCollections() {
	const currentUser = useUserContext().user;

	const addToMyWatchlist = async (movieId) => {

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
				
		const urlParams = new URLSearchParams({
			where: `_ownerId="${currentUser.id}"`,
			load: `movie=movieId:movies,owner=_ownerId:users`,
		});

		const result = await fetch(`${SU_WATCHLISTS}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'x-authorization': currentUser.accessToken,
			},
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));


		return result;
	};

	const removeFromWatchlist = async (movieId) => {
		let deleteMovieId = '';

		const data = await getMyWatchlist();
		if (!data) return;

		const collectionsArray = await Object.values(data);

		for (let i = 0; i < collectionsArray.length; i++) {
			if (collectionsArray[i].movieId === movieId) {
				deleteMovieId = collectionsArray[i]._id;
			}
		}

		const result = await fetch(`${SU_WATCHLISTS}/${deleteMovieId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'x-authorization': currentUser.accessToken,
			},
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));

		return result;
	};

	return { addToMyWatchlist, getMyWatchlist, removeFromWatchlist };
}
