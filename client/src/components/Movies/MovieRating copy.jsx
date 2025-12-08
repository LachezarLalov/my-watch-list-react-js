import { useState } from 'react';

export default function MovieRating({ rating }) {
	const [stars, setStars] = useState(1);

	const handleClick = (e) => {
		setStars(e.target.dataset.star);
	};

	
return (
		<div className='select-none flex items-center justify-center gap-1'>
			{rating && <p className='text-center text-sm'>{rating}</p>}
			<span
				onClick={handleClick}
				data-star={1}
				className={`text-xl ${stars > 0 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={2}
				className={`text-xl ${stars > 1 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={3}
				className={`text-xl ${stars > 2 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={4}
				className={`text-xl ${stars > 3 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={5}
				className={`text-xl ${stars > 4 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
		</div>
	);
}


// 	return (
// 		<div className='select-none flex items-center justify-center gap-1'>
// 			{rating && <p className='text-center text-sm'>{rating}</p>}
// 			<span
// 				onClick={handleClick}
// 				data-star={1}
// 				className={`text-xl ${stars > 0 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
// 			>
// 				★
// 			</span>
// 			<span
// 				onClick={handleClick}
// 				data-star={2}
// 				className={`text-xl ${stars > 1 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
// 			>
// 				★
// 			</span>
// 			<span
// 				onClick={handleClick}
// 				data-star={3}
// 				className={`text-xl ${stars > 2 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
// 			>
// 				★
// 			</span>
// 			<span
// 				onClick={handleClick}
// 				data-star={4}
// 				className={`text-xl ${stars > 3 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
// 			>
// 				★
// 			</span>
// 			<span
// 				onClick={handleClick}
// 				data-star={5}
// 				className={`text-xl ${stars > 4 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
// 			>
// 				★
// 			</span>
// 		</div>
// 	);
// }

//TODO add/remove from liked movies

// return (
//     <div>
//         <button onClick={handleClick}>
//             {liked ? <span class='text-red-500 text-2xl'>❤</span> : <span class='text-red-500 text-2xl'>♡</span>}
//         </button>
//     </div>
// );
