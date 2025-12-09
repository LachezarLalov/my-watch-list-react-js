import { SU_TOP_TENS } from '../config';
import { useUserContext } from '../contexts/UserContext';

export default function useTopTenCollection() {
	const currentUser = useUserContext().user;

	const addToTopTens = async (movieId) => {
		const result = await fetch(`${SU_TOP_TENS}`, {
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

	const getMyTopTens = async () => {
		const urlParams = new URLSearchParams({
			where: `_ownerId="${currentUser.id}"`,
			load: `movie=movieId:movies,owner=_ownerId:users`,
		});

		const result = await fetch(`${SU_TOP_TENS}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'x-authorization': currentUser.accessToken,
			},
		})
			.then((result) => result.json())
			.catch((err) => alert(err.message));

		console.log(`getMyTopTens is :${result}`);
		console.log(result);
		return result;
	};

	const getTopTens = async () => {
		console.log(`getCollection`);
		const params = new URLSearchParams({
			load: 'movie=movieId:movies,owner=_ownerId:users',
		});

		const result = await fetch(`${SU_TOP_TENS}?${params.toString()}`, {
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

	return { addToTopTens, getMyTopTens, getTopTens };
}
