// TODO fix url
// TODO add abort controller
// TODO add loading state

export default async function useRequest(values, url, baseUrl, method, auth) {
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

	if (values) {
		options.body = JSON.stringify(values);
	}

	if (auth) {
		options.headers['x-authorization'] = auth;
	}

	const response = await fetch(`${baseUrl}${url}`, options);

	// TODO fix per request type
	if (!response.ok || response.status === 204) {
		const error = await response.json();
		// alert(error.message);
		return error;
	}

	const result = await response.json();
	return result;
}
