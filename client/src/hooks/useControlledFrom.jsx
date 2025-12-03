import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useUserContext } from '../contexts/UserContext';

export default function useControlledForm(initialValues, onSubmit, url, method) {
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
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (values.repassword && values.password !== values.repassword) {
			setError('Passwords do not match!');
			return;
		}

		const result = await onSubmit(values, url, method);
		console.log(result);

		if (result.code === 403) {
			setError('Wrong email or password!');
			return;
		}

		if (result.accessToken) {
			console.log(result);
			const { username, email, accessToken, _id } = result;
			loginHandler(username, email, accessToken, _id);
			navigate('/');
		}
		setValues(initialValues);
	};

	return { values, changeHandler, submitHandler, errorHandler, error };
}
