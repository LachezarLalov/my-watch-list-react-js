import { useState } from 'react';

export default function MovieLike() {
	const [liked, setLiked] = useState(false);

	const handleClick = () => {
		setLiked(!liked);
	};

	//TODO add/remove from liked movies

	return (
		<div>
			<button onClick={handleClick}>
				{liked ? <span class='text-red-500 text-2xl'>❤</span> : <span class='text-red-500 text-2xl'>♡</span>}
			</button>
		</div>
	);
}
