import { Navigate } from 'react-router';
import userApi from '../../utils/userApi';
import { useUserContext } from '../../contexts/UserContext';

export default function UserLogout() {
	const { logoutHandler } = useUserContext();

	const url = '/logout';
	const method = 'GET';
	const values = '';

	console.log('lgooout');
	logoutHandler();

	userApi(values, url, method);
	// TODO set user to null
	return <Navigate to='/' />;
}
