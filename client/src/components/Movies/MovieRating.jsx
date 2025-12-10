export default function MovieRating({ rating }) {
	return (
		<div className='select-none flex items-center justify-center gap-1'>
			{rating && <p className='mr-2 text-center text-sm'>{rating}</p>}
			<span className={`text-xl ${rating > 0 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}>★</span>
			<span className={`text-xl ${rating > 3 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}>★</span>
			<span className={`text-xl ${rating > 5 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}>★</span>
			<span className={`text-xl ${rating > 7 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}>★</span>
			<span className={`text-xl ${rating > 9 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}>★</span>
		</div>
	);
}
