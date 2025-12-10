import { useEffect, useState } from 'react';
import TopTenListCard from './TopTenListCard';
import useTopTenCollection from '../../hooks/useTopTenCollection';

export default function TopTens() {
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
			<h1 className='text-center text-5xl mt-25 font-extrabold tracking-wide m-5  '>TOP 10's</h1>
			<div className=' flex flex-wrap justify-center gap-5 m-10 '>
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
