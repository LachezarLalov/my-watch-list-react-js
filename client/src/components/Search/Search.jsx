import { useState } from 'react';
import { SU_MOVIES } from '../../config';
import { Link, useNavigate } from 'react-router';

const OMDB_API_KEY = 'e4aa255b';

export default function Search() {
	const [isFound, setIsFound] = useState(true);
	const navigate = useNavigate();
	const [query, setQuery] = useState('');
	const [searchValues, setSearchValues] = useState({
		title: '',
		year: '',
		director: '',
		poster: '',
	});

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	const searchHandler = async (e) => {
		e.preventDefault();

		setSearchValues({});
		//TODO use useRequest for local server
		const urlParams = new URLSearchParams({ where: `title like "${query}"` });

		const localServerResponse = await fetch(`${SU_MOVIES}?${urlParams.toString()}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const localResult = await localServerResponse.json().then();

		if (localResult.length > 0) {
			setSearchValues({
				id: localResult[0]._id ? localResult[0]._id : '',
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

			setIsFound(true);
			return localResult;
		}

		setIsFound(false);
	};

	const clickMovieHandler = () => {
		navigate(`/movies/${searchValues.id}`);
	};

	return (
		<div className='flex flex-col items-center justify-center z-50'>
			<div className=''>
				<h2 className='-mt-5 text-center text-3xl font-bold tracking-tight'>Search</h2>
			</div>

			<div className='flex flex-col justify-center  '>
				<div>
					<div className='mt-1'>
						<label htmlFor='title' className='block text-sm font-medium'>
							Title
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

				<div className='flex flex-col'>
					<button
						type='onClick'
						onClick={searchHandler}
						className='flex justify-center rounded-md bg-yellow-600/90 mt-5 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-yellow-500/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
					>
						Search
					</button>
				</div>

				<div className='backdrop-blur-sm flex justify-center items-center min-h-[450px] min-w-[300px] bg-amber-200/20 mt-5 rounded-xl shadow-2xl'>
					{!isFound && (
						<div className='flex flex-col'>
							<p className='text-center text-2xl font-bold tracking-tight'>NOT FOUND </p>
							<Link
								to='/movies/create'
								className='text-center text-xl mt-3 font-bold tracking-tight hover:text-amber-400 hover:cursor-pointer'
							>
								Add movie?
							</Link>
						</div>
					)}
					{searchValues.title && (
						<div className='flex flex-col justify-center text-center text-sm/6 font-bold tracking-tight'>
							<p>{searchValues.title}</p>
							<p>{searchValues.director}</p>
							<p>{searchValues.year}</p>
							<img
								onClick={clickMovieHandler}
								src={searchValues.poster}
								className='hover:cursor-pointer w-50 h-80 object-cover size-300'
							/>
							<p>{searchValues.rating}</p>
						</div>
					)}
				</div>
			</div>
			<div></div>
		</div>
	);
}
