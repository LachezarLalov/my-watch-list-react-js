import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function useControlledForm(initialValues, onSubmit, url, method) {
	const [values, setValues] = useState(initialValues);

	const navigate = useNavigate();

	const changeHandler = (e) => {
		setValues((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		const result = await onSubmit(values, url, method);
		console.log(result);

		if (result.email) {
			navigate('/');
		}

		setValues(initialValues);
	};

	return { values, changeHandler, submitHandler };
}
