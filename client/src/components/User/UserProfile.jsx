import { useEffect, useState } from 'react';
import TopTenListCard from '../TopTens/TopTenListCard';
import useTopTenCollection from '../../hooks/useTopTenCollection';

export default function UserProfile() {
	const { getMyTopTens } = useTopTenCollection();
	const [topTenCollections, setTopTenCollections] = useState([]);

	useEffect(() => {
		const getAllTopTens = async () => {
			const data = await getMyTopTens();
			setTopTenCollections(data);
		};

		getAllTopTens();
	}, []);

	console.log(`before card: ${topTenCollections}`);
	return (
		<div className='z-50'>
			<div className='z-50'>
				<div className='inline-flex gap-1 m-10'>
					{topTenCollections.slice(0, 1).map((collection) => (
						<TopTenListCard
							key={collection.movie._id}
							id={collection.ownerName}
							title='Your top 10'
							movies={topTenCollections}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
