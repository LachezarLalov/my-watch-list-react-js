import { useNavigate } from 'react-router';

import { useUserContext } from '../../contexts/UserContext';

export default function UserLogout() {
	const { logoutHandler } = useUserContext();
	const navigate = useNavigate();

	// const url = '/logout';
	// const method = 'GET';
	// const values = '';

	// userApi(values, url, method);

	logoutHandler();
	navigate('/');
}
