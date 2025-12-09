import { useEffect, useState } from 'react';
import useTopTenCollection from './useTopTenCollection';

export default function useCheckCollection(id) {
	const { getMyTopTens } = useTopTenCollection();
	const [isInMyList, setIsInMyList] = useState(false);

	useEffect(() => {
		const checkMovie = async () => {
			const data = await getMyTopTens();
			if (!data) return;

			const collectionsArray = Object.values(data);

			console.log('collectionsArray is:', collectionsArray);

			const exists = collectionsArray.flatMap((collection) => collection.movies);

			setIsInMyList(exists);
		};

		checkMovie();
	}, []);

	return isInMyList;
}
