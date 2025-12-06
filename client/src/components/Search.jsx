import { useState } from 'react';
import { SU_MOVIES } from '../config';

export default function Search() {
	// const [movies, setMovies] = useState([]);

	// useEffect(() => {
	// 	fetch(`${SU_MOVIES}`)
	// 		.then((res) => res.json())
	// 		.then((movies) => setMovies(Object.values(movies)))
	// 		.catch((err) => alert(err.message));
	// }, []);

	// console.log(movies);

	const [query, setQuery] = useState('');

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};
	const submitHandler = async (e) => {
		e.preventDefault();

		const urlParams = new URLSearchParams({ where: `title="${query}"` });

		const response = await fetch(`${SU_MOVIES}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// const response = await fetch(`${SU_MOVIES}?${urlParams.toString()}`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// });

		const result = await response.json();

		console.log(result);
	};

	return (
		<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 z-50'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='-mt-5 text-center text-2xl/9 font-bold tracking-tight'>Search</h2>
			</div>

			<div className='mt-1 sm:mx-auto sm:w-full sm:max-w-sm'>
				<form onSubmit={submitHandler} className='space-y-3'>
					<div>
						<div className='mt-1'>
							<input
								id='title'
								name='title'
								type='search'
								value={query}
								onChange={changeHandler}
								required
								className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
							/>
						</div>
					</div>
					<button
						type='submit'
						className='flex w-full justify-center rounded-md bg-indigo-600 mt-10 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
					>
						Search
					</button>
				</form>
			</div>
			<div></div>
		</div>
	);
}
