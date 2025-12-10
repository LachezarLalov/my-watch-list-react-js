import { useState } from 'react';
import { SU_MOVIES } from '../../config';

const OMDB_API_KEY = 'e4aa255b';

export default function SideSearch({ setSearchValues, searchValues }) {
	const [query, setQuery] = useState('');

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		//TODO use useRequest for local server
		const urlParams = new URLSearchParams({ where: `title like "${query}"` });

		const localServerResponse = await fetch(`${SU_MOVIES}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const localResult = await localServerResponse.json();

		if (localResult.length > 0) {
			setSearchValues({
				id: localResult[0]._id,
				title: localResult[0].title ? localResult[0].title : '',
				year: localResult[0].year ? localResult[0].year : '',
				director: localResult[0].director ? localResult[0].director : '',
				awards: localResult[0].awards ? localResult[0].awards : '',
				country: localResult[0].country ? localResult[0].country : '',
				actors: localResult[0].actors ? localResult[0].actors : '',
				poster: localResult[0].poster ? localResult[0].poster : '',
				rating: localResult[0].rating ? localResult[0].rating : '',
				genre: localResult[0].genre ? localResult[0].genre : '',
				plot: localResult[0].plot ? localResult[0].plot : '',
				boxOffice: localResult[0].boxOffice ? localResult[0].boxOffice : '',
			});
			return localResult;
		}

		const omdbServerResponse = await fetch(`https://omdbapi.com/?apikey=${OMDB_API_KEY}&t=${query}`);

		const omdbResult = await omdbServerResponse.json();

		setSearchValues({
			title: omdbResult.Title,
			year: omdbResult.Year,
			director: omdbResult.Director,
			awards: omdbResult.Awards,
			country: omdbResult.Country,
			actors: omdbResult.Actors,
			poster: omdbResult.Poster,
			rating: omdbResult.imdbRating,
			genre: omdbResult.Genre,
			plot: omdbResult.Plot,
			boxOffice: omdbResult.BoxOffice,
		});

	};

	return (
		<div className='z-50'>
			{/* <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='-mt-5 text-center text-2xl/9 font-bold tracking-tight'>Search</h2>
			</div> */}

			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<form onSubmit={submitHandler} className='space-y-3'>
					<div>
						<div className='mt-1'>
							<label htmlFor='title' className='block text-sm font-medium'>
								Search by Title
							</label>
							<input
								id='title'
								name='title'
								type='search'
								value={query}
								onChange={changeHandler}
								required
								className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500/90 sm:text-sm/6'
							/>
						</div>
					</div>

					<button
						type='submit'
						className='flex w-full justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
					>
						Search
					</button>

					<div className='flex justify-center min-h-20'>
						{searchValues.title && (
							<div className='flex flex-col justify-center text-center text-sm/6 font-bold tracking-tight'>
								<p>{searchValues.title}</p>
								<p>{searchValues.director}</p>
								<p>{searchValues.year}</p>
								<img src={searchValues.poster} className='w-40 h-60 object-cover size-300' />
								<p>{searchValues.rating}</p>
							</div>
						)}
					</div>
				</form>
			</div>
			<div></div>
		</div>
	);
}
