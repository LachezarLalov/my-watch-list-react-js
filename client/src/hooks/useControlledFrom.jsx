import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function useControlledForm(initialValues, onSubmit) {
	const [values, setValues] = useState(initialValues);

	const navigate = useNavigate();

	const url = '/login';

	const changeHandler = (e) => {
		setValues((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		const result = await onSubmit(values, url);
		console.log(result);

		if (result.email) {
			navigate('/');
		}

		setValues(initialValues);
	};

	return { values, changeHandler, submitHandler };
}
