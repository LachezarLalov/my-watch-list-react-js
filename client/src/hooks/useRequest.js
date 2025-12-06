import { SU_USERS } from '../config';
// TODO fix url
// TODO add abort controller
// TODO add loading state

export default async function useRequest(values, url, method) {
	const { username, email, password } = values;
	const options = {
		method: method,
		headers: {
			'content-type': 'application/json',
		},
	};

	if (url === '/login') {
		options.body = JSON.stringify({ email, password });
	} else if (url === '/register') {
		options.body = JSON.stringify({ username, email, password });
	}

	const response = await fetch(`${SU_USERS}${url}`, options);

	if (url === '/logout') {
		return response;
	}
	// TODO fix per request type
	if (!response.ok || response.status === 204) {
		const error = await response.json();
		// alert(error.message);
		return error;
	}

	const result = await response.json();
	return result;
}
