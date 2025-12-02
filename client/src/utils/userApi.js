import { SU_USERS } from '../config';

export default async function userApi(values, url) {
	const { email, password } = values;

	const options = {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
	};

	if (url === '/login' || url === '/register') {
		options.body = JSON.stringify({ email, password });
	}

	const response = await fetch(`${SU_USERS}/${url}`, options);

	// TODO fix per request type

	if (!response.ok || response.status === 204) {
		const error = await response.json();
		alert(error.message);
		return error;
	}

	const result = await response.json();
	return result;
}
