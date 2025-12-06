import { Navigate, Outlet } from 'react-router';
import { useUserContext } from '../contexts/UserContext';

export default function RouteGuard() {
	const { user } = useUserContext();

	const isAuth = user && user.isAuthenticated;

	return isAuth ? <Outlet /> : <Navigate to='/login' />;
}
