import { useNavigate } from 'react-router';

import { useUserContext } from '../../contexts/UserContext';
// import useRequest from '../../hooks/useRequest';
import { SU_USERS } from '../../config';
import { useEffect } from 'react';

export default function UserLogout() {
	const { logoutHandler } = useUserContext();
	const navigate = useNavigate();

	// const baseUrl = SU_USERS;
	// const url = '/logout';

	useEffect(() => {
		// fetch(`${baseUrl}${url}`);
		logoutHandler();
		navigate('/');
	}),
		[];

	// useRequest(url, baseUrl); - CORS error
}
