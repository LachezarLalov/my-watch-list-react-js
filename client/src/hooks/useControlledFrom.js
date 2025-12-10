import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserContext } from '../contexts/UserContext';

export default function useControlledForm(
	initialValues,
	onSubmit,
	url,
	baseUrl,
	method,
	auth,
	setPreviewValues,
	redirect
) {
	const { loginHandler } = useUserContext();
	const [values, setValues] = useState(initialValues);
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const errorHandler = () => {
		setError('');
	};

	const changeHandler = (e) => {
		setValues((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));

		if (setPreviewValues) {
			setPreviewValues((state) => {
				const updatedValues = {
					...state,
					[e.target.name]: e.target.value,
				};
				setPreviewValues(updatedValues);
			});
		}
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (values.repassword && values.password !== values.repassword) {
			setError('Passwords do not match!');
			return;
		}

		const result = await onSubmit(values, url, baseUrl, method, auth);

		if (result.code === 403) {
			setError('Wrong email or password!');
			return;
		}

		if (result.accessToken) {
			const { username, email, accessToken, _id } = result;
			loginHandler(username, email, accessToken, _id);
			navigate('/');
		}

		if (redirect) {
			// TODO use Base URL
			navigate(`/movies/${result._id}`);
		}
		setValues(initialValues);
	};

	return { values, changeHandler, submitHandler, errorHandler, error };
}
