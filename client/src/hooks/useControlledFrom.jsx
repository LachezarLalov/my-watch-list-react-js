import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function useControlledForm(initialValues, onSubmit, url, method) {
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
			// alert('Passwords do not match');
			return;
		}

		if (url === 'logout') {
			navigate('/');
			return;
		}

		const result = await onSubmit(values, url, method);
		console.log(result);

		if (result.accessToken) {
			navigate('/');
		}

		setValues(initialValues);
	};

	return { values, changeHandler, submitHandler, errorHandler, error };
}
