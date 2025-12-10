import { useEffect, useState } from 'react';

import { SU_DIRECTORS } from '../../config';
import DirectorCard from './DirectorCard';

export default function Directors() {
	const [directors, setDirectors] = useState([]);

	useEffect(() => {
		fetch(`${SU_DIRECTORS}`)
			.then((res) => res.json())
			.then((data) => setDirectors(Object.values(data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='z-50'>
			<h1 className='text-center text-5xl font-bold'>Directors</h1>

			<div className='overflow-x-auto'>
				<div className='grid grid-cols-6 gap-4 p-10 min-w-max'>
					{directors.map((director) => (
						<DirectorCard
							key={director.name}
							id={director._id}
							name={director.name}
							imageUrl={director.imageUrl}
							country={director.country}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
