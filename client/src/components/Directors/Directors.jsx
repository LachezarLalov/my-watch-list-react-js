import { useEffect, useState } from 'react';

import { SU_DATA } from '../../config';
import DirectorsCard from './DirectorsCard';

export default function Directors() {
	const [directors, setDirectors] = useState([]);

	useEffect(() => {
		fetch(`${SU_DATA}/directors`)
			.then((res) => res.json())
			.then((data) => setDirectors(Object.values(data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='z-50'>
			<h1 className='text-center text-5xl font-bold'>Directors</h1>

			<div className='grid grid-cols-6 gap-4 m-10'>
				{directors.map((director) => (
					<DirectorsCard
						key={director.name}
						name={director.name}
						imageUrl={director.imageUrl}
						country={director.country}
					/>
				))}
			</div>
		</div>
	);
}
