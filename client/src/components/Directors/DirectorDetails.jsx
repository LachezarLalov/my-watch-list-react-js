import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { SU_DIRECTORS } from '../../config';

export default function MovieDetails() {
	const id = useParams().id;
	const [director, setDirector] = useState({});

	useEffect(() => {
		fetch(`${SU_DIRECTORS}/${id}`)
			.then((res) => res.json())
			.then((dir) => setDirector(dir))
			.catch((err) => alert(err.message));
	}, [id]);

	const topMovies = director.topMovies?.join(', ');

	return (
		<div className='flex flex-row text-center z-30 bg-amber-200/10 m-5 rounded-xl shadow-2xl '>
			<img
				src={director.imageUrl}
				className='relative z-30 justify-content-center w-100 h-150 object-cover size-300 rounded-xl'
			/>
			<div className='flex flex-col gap-5 text-center z-30'>
				<h2 className='z-50 text-4xl font-extrabold  m-2 mt-5 '>{director.name}</h2>
				<div
					key={director.name}
					className='bg-black/50 text-center
					shadow-2xl max-w-300 max-h-300 transition-all duration-300 ease-in-outmin-w-60  max-w-[50ch] text-center mx-auto'
				>
					<h2 className='m-2 text-[14px]'>
						Country: <span className='font-bold'>{director.country}</span>
					</h2>
					<h2 className='m-2 text-[14px]'>
						Oscars: <span className='font-bold'>{director.oscars}</span>
					</h2>
					<h2 className='m-2 text-[14px]'>
						Nominations: <span className='font-bold'>{director.nominations}</span>
					</h2>
					<h2 className='m-2 text-[14px]'>
						Movies: <span className='font-bold'>{topMovies}</span>
					</h2>
					<h2 className='mt-5 max-w-[50ch] font-serif font-medium text-lg text-center mx-auto'>
						Biography: <span className=''>{director.bio}</span>
					</h2>
					<div className='flex flex-row justify-center'>
						<h2 className='m-2 text-[14px]'>
							Born: <span className='font-bold'>{director.born}</span>
						</h2>
						{director.dateOfDeath && (
							<h2 className='m-2 text-[14px]'>
								Death: <span className='font-bold'>{director.dateOfDeath}</span>
							</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
