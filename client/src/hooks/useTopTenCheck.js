import { useEffect, useState } from 'react';
import useTopTenCollection from './useTopTenCollection';

export default function useTopTenCheck(id) {
	const { getMyTopTens } = useTopTenCollection();
	const [isInUserList, setIsInMyList] = useState(false);
	const currentMovieId = Object.values(id).at(0);

	useEffect(() => {
		const checkMovie = async () => {
			const data = await getMyTopTens();
			if (!data) return;

			const collectionsArray = await Object.values(data);

			for (let i = 0; i < collectionsArray.length; i++) {
				if (collectionsArray[i].movieId === currentMovieId) {
					setIsInMyList(true);
				}
			}
		};

		checkMovie();
	}, []);

	return { isInUserList };
}
