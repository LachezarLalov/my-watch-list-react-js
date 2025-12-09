// import { useNavigate } from 'react-router';

import TopTenMovieCard from './TopTenMovieCard';

// import { useUserContext } from '../../contexts/UserContext';
// import useCollections from '../../hooks/useCollections';

export default function TopTenListCard({ title, movies }) {
	// const navigate = useNavigate();
	// const { addToCollection } = useCollections();
	// const user = useUserContext().user;
	console.log(`movies are: `, movies);

	const movieList = movies.map((item) => item.movie);
	console.log(movieList);

	return (
		<div
			key={title}
			className=' max-w-200  transition-all duration-300 ease-in-out hover:border-amber-00 hover:bg-black/50 hover:shadow-amber-300/70 min-w-60 bg-black/70 m-5 text-center rounded-xl sm:py-1 shadow-amber-300/50 shadow-2xl border-amber-200/80 border-2 border-solid'
		>
			<h1 className='text-[clamp(1.2rem,1.2vw,1.6rem)] font-bold m-4'>{title}</h1>

			{movieList.map((movie) => (
				<TopTenMovieCard key={movie._id} id={movie._id} title={movie.title} poster={movie.poster} />
			))}

		</div>
	);
}
