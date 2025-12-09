import { useEffect, useState } from 'react';
import TopTenListCard from './TopTenListCard';
import useTopTenCollection from '../../hooks/useTopTenCollection';

export default function TopTenLists() {
	const { getTopTens } = useTopTenCollection();
	const [topTenCollections, setTopTenCollections] = useState([]);

	useEffect(() => {
		const getAllTopTens = async () => {
			const data = await getTopTens();
			const formattedData = Object.values(data);
			setTopTenCollections(formattedData);
		};

		getAllTopTens();
	}, []);

	return (
		<div className='z-50'>
			<div className='inline-flex gap-1 m-10'>
				{topTenCollections.map((collection) => (
					<TopTenListCard
						key={collection.ownerName}
						id={collection.ownerName}
						title={`${collection.ownerName}'s top 10`}
						movies={collection.movies}
					/>
				))}
			</div>
		</div>
	);
}
