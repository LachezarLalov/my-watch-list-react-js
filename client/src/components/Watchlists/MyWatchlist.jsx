import { useEffect, useState } from 'react';
import TopTenListCard from './TopTenListCard';
import useTopTenCollection from '../../hooks/useTopTenCollection';

export default function MyWatchlist() {
	const { getgetMyWatchlist } = useTopTenCollection();
	const [myWatchlist, setMyWatchlist] = useState([]);

	useEffect(() => {
		const getMyWatchlist = async () => {
			const data = await getgetMyWatchlist();
			const formattedData = Object.values(data);
			setMyWatchlist(formattedData);
		};

		getMyWatchlist();
	}, []);

	return (
		<div className='z-50'>
			<div className='inline-flex gap-1 m-10'>
				{myWatchlist.map((collection) => (
					<MyWatchlistCard
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
