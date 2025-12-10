import { useNavigate } from 'react-router';

export default function MyWachlistMovieCard({ title, poster, id }) {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate(`/movies/${id}`);
	};
	return (
		<div
			onClick={clickHandler}
			className='backdrop-blur-sm hover:cursor-pointer  transition-all duration-300 ease-in-out  hover:border-amber-400 hover:bg-amber-200/70 hover:shadow-amber-300/70 flex m-2 items-center max-w-80 max-h-20 min-w-80 bg-amber-200/40 text-center rounded-xl shadow-amber-300/50 shadow-2xl overflow-hidden'
		>
			<div className='w-1/2 p-2 flex items-center justify-center'>
				<h2 className='text-sm text-white'>{title}</h2>
			</div>

			<div className='w-1/2'>
				<img src={poster} className=' h-full w-full object-cover' />
			</div>
		</div>
	);
}
