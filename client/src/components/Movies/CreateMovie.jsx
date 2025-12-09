import { useState } from 'react';
import useControlledForm from '../../hooks/useControlledFrom';
import useRequest from '../../hooks/useRequest';
import Search from '../Search';
import AddMoviePreview from './AddMoviePreview';
import { SU_MOVIES } from '../../config';
import { useUserContext } from '../../contexts/UserContext';

export default function CreateMovie() {
	const [previewValues, setPreviewValues] = useState({});
	const [searchValues, setSearchValues] = useState({
		title: '',
		year: '',
		director: '',
		awards: '',
		country: '',
		actors: '',
		poster: '',
		rating: '',
		genre: '',
		plot: '',
		boxOffice: '',
	});

	const baseUrl = SU_MOVIES;
	const url = '';
	const method = 'POST';
	const { user } = useUserContext();
	const auth = user.accessToken;
	const redirect = true;

	const initialValues = {
		title: '',
		year: '',
		director: '',
		awards: '',
		country: '',
		actors: '',
		poster: '',
		rating: '',
		genre: '',
		plot: '',
		boxOffice: '',
	};

	const { values, changeHandler, submitHandler } = useControlledForm(
		initialValues,
		useRequest,
		baseUrl,
		url,
		method,
		auth,
		setPreviewValues,
		redirect
	);

	const loadHandler = async (e) => {
		e.preventDefault();
		setPreviewValues(searchValues);

		values.title = searchValues.title;
		values.year = searchValues.year;
		values.director = searchValues.director;
		values.awards = searchValues.awards;
		values.country = searchValues.country;
		values.actors = searchValues.actors;
		values.poster = searchValues.poster;
		values.rating = searchValues.rating;
		values.genre = searchValues.genre;
		values.plot = searchValues.plot;
		values.boxOffice = searchValues.boxOffice;
	};

	let isLocal = false;
	if (searchValues.id) {
		isLocal = true;
	}
	console.log(isLocal);

	return (
		<div className='flex  w-full flex-col items-center px-6 py-12 lg:px-8 z-50'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<h2 className='text-center text-2xl font-bold tracking-tight'>Add movie</h2>
			</div>

			<div
				className='mt-12 flex w-full flex-row gap-12
			                xl:flex-row xl:items-start xl:justify-center'
			>
				<div className='w-full max-w-sm'>
					<Search setSearchValues={setSearchValues} searchValues={searchValues} />
					{isLocal && (
						<div className='flex flex-col justify-center text-center '>
							<p className='text-red-500 mt-2 font-bold justify-center '>We have that movie!</p>
					
						<button
							onClick={loadHandler}
							type='button'
							className='mt-8 flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white  bg-indigo-600 hover:bg-indigo-500'
							>
							Add to top 10
						</button>

												<button
							onClick={loadHandler}
							type='button'
							className='mt-8 flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white  bg-indigo-600 hover:bg-indigo-500'
							>
							Add to watch list
						</button>
							</div>
					)}
				</div>

				<div className='w-full max-w-sm'>
					<form onSubmit={submitHandler} className='space-y-4'>
						{/* title */}
						<div className='flex items-center'>
							<label htmlFor='title' className='block text-sm font-medium w-24'>
								Title
							</label>
							<input
								id='title'
								name='title'
								type='text'
								value={values.title}
								onChange={changeHandler}
								required
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* year */}
						<div className='flex items-center'>
							<label htmlFor='year' className='block text-sm font-medium w-24'>
								Year
							</label>
							<input
								id='year'
								name='year'
								type='text'
								value={values.year}
								onChange={changeHandler}
								required
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* director */}
						<div className='flex items-center'>
							<label htmlFor='director' className='block text-sm font-medium w-24'>
								Director
							</label>
							<input
								id='director'
								name='director'
								type='text'
								value={values.director}
								onChange={changeHandler}
								required
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>
						<p className='text-gray-300 text-center text-sm/3 font-bold tracking-tight ml-15'>optional</p>
						{/* awards */}
						<div className='flex items-center'>
							<label htmlFor='awards' className='block text-sm font-medium w-24'>
								Awards
							</label>
							<input
								id='awards'
								name='awards'
								type='text'
								value={values.awards}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* country */}
						<div className='flex items-center'>
							<label htmlFor='country' className='block text-sm font-medium w-24'>
								Country
							</label>
							<input
								id='country'
								name='country'
								type='text'
								value={values.country}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* actors */}
						<div className='flex items-center'>
							<label htmlFor='actors' className='block text-sm font-medium w-24'>
								Actors
							</label>
							<input
								id='actors'
								name='actors'
								type='text'
								value={values.actors}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* rating */}
						<div className='flex items-center'>
							<label htmlFor='rating' className='block text-sm font-medium w-24'>
								Rating
							</label>
							<input
								id='rating'
								name='rating'
								type='text'
								value={values.rating}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* poster */}
						<div className='flex items-center'>
							<label htmlFor='poster' className='block text-sm font-medium w-24'>
								Poster
							</label>
							<input
								id='poster'
								name='poster'
								type='text'
								value={values.poster}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* genre */}
						<div className='flex items-center'>
							<label htmlFor='genre' className='block text-sm font-medium w-24'>
								Genre
							</label>
							<input
								id='genre'
								name='genre'
								type='text'
								value={values.genre}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* plot */}
						<div className='flex items-center'>
							<label htmlFor='plot' className='block text-sm font-medium w-24'>
								Plot
							</label>
							<input
								id='plot'
								name='plot'
								type='text'
								value={values.plot}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{/* boxOffice */}
						<div className='flex items-center'>
							<label htmlFor='boxOffice' className='block text-sm font-medium w-24'>
								Box Office
							</label>
							<input
								id='boxOffice'
								name='boxOffice'
								type='text'
								value={values.boxOffice}
								onChange={changeHandler}
								className='mt-1 block w-full rounded-md bg-white px-3 py-2 text-gray-900
			           outline outline-1 outline-gray-300 focus:outline-indigo-600'
							/>
						</div>

						{searchValues.title && (
							<button
								onClick={loadHandler}
								type='button'
								disabled={isLocal}
								className={`mt-8 flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white 
									${isLocal ? 'bg-gray-400 cursor-not-allowed opacity-60' : 'bg-indigo-600 hover:bg-indigo-500'}`}
							>
								Load
							</button>
						)}
						<button
							type='submit'
							disabled={isLocal}
							className={`mt-8 flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white 
					${isLocal ? 'bg-gray-400 cursor-not-allowed opacity-60' : 'bg-indigo-600 hover:bg-indigo-500'}`}
						>
							Add the movie
						</button>
					</form>
				</div>

				<div className='w-full max-w-sm'>
					<AddMoviePreview {...previewValues} />
				</div>
			</div>
		</div>
	);
}
