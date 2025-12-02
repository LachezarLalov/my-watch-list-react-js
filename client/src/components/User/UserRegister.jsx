import { Link } from 'react-router';
import useControlledForm from '../../hooks/useControlledFrom';
import userApi from '../../utils/userApi';

export default function UserRegister() {
	// const SubmitHandler = (e) => {
	// 	e.preventDefault();

	// 	const formData = new FormData(e.target);
	// 	console.log(formData.get('username'));
	// 	console.log(formData.get('email'));
	// 	console.log(formData.get('password'));
	// };

	const url = '/register';
	const method = 'POST';

	const initialValues = {
		username: '',
		email: '',
		password: '',
		repassword: '',
	};

	const { values, changeHandler, submitHandler } = useControlledForm(initialValues, userApi, url, method);

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 z-50'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<h2 className='mt-20 text-center text-2xl/9 font-bold tracking-tight'>Sign in</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form onSubmit={submitHandler} className='space-y-3'>
						<div>
							<label htmlFor='username' className='block text-sm/6 font-medium '>
								Username
							</label>
							<div className='mt-1'>
								<input
									id='username'
									name='username'
									type='username'
									value={values.username}
									onChange={changeHandler}
									required
									autoComplete='username'
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
							</div>
						</div>

						<div>
							<label htmlFor='email' className='block text-sm/6 font-medium '>
								Email address
							</label>
							<div className='mt-1'>
								<input
									id='email'
									name='email'
									type='email'
									value={values.email}
									onChange={changeHandler}
									required
									autoComplete='email'
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label htmlFor='password' className='block text-sm/6 font-medium'>
									Password
								</label>
							</div>
							<div className='mt-1'>
								<input
									id='password'
									name='password'
									type='password'
									value={values.password}
									onChange={changeHandler}
									required
									autoComplete='current-password'
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
							</div>
						</div>

						<div>
							<div className='flex items-center justify-between'>
								<label htmlFor='repassword' className='block text-sm/6 font-medium'>
									Repeat Password
								</label>
							</div>
							<div className='mt-1'>
								<input
									id='repassword'
									name='repassword'
									type='repassword'
									value={values.repassword}
									onChange={changeHandler}
									required
									autoComplete='repeat-password'
									className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
								/>
							</div>
						</div>

						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 mt-10 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Sign in
							</button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm/6 '>
						Already registered?{' '}
						<Link to='/login' className='font-bold text-white hover:text-indigo-500'>
							Login here
						</Link>
					</p>
				</div>
			</div>
		</>
	);
}
