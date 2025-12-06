import { createContext, useContext } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';

export const UserContext = createContext({
	user: {
		username: '',
		email: '',
		accessToken: '',
		id: '',
		isAuthenticated: false,
	},

	loginHandler() {},
	logoutHandler() {},
});

export function UserProvider({ children }) {
	const [user, setUser] = usePersistedState(null, 'auth');

	const loginHandler = (username, email, accessToken, id) => {
		setUser({
			username,
			email,
			accessToken,
			id,
			isAuthenticated: true,
		});
	};

	const logoutHandler = () => {
		setUser(null);
	};

	return <UserContext.Provider value={{ user, loginHandler, logoutHandler }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
	const data = useContext(UserContext);
	return data;
}
