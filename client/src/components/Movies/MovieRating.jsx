import { useState } from 'react';

export default function MovieRating() {
	const [stars, setStars] = useState(1);

	const handleClick = (e) => {
		setStars(e.target.dataset.star);
	};

	// TODO record rating

	return (
		<dev className='select-none flex items-center justify-center gap-1'>
			<span
				onClick={handleClick}
				data-star={1}
				class={`text-xl ${stars > 0 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={2}
				class={`text-xl ${stars > 1 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={3}
				class={`text-xl ${stars > 2 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={4}
				class={`text-xl ${stars > 3 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
			<span
				onClick={handleClick}
				data-star={5}
				class={`text-xl ${stars > 4 ? 'text-yellow-400' : 'text-gray-400'} hover:cursor-pointer`}
			>
				★
			</span>
		</dev>
	);
}

//TODO add/remove from liked movies

// return (
//     <div>
//         <button onClick={handleClick}>
//             {liked ? <span class='text-red-500 text-2xl'>❤</span> : <span class='text-red-500 text-2xl'>♡</span>}
//         </button>
//     </div>
// );
