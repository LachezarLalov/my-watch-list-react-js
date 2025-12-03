import { Navigate } from 'react-router';
import userApi from '../../utils/userApi';

export default function UserLogout() {
	const url = '/logout';
	const method = 'GET';
	const values = '';

	userApi(values, url, method);
	// TODO set user to null
	return <Navigate to='/' />;
}
