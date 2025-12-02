import { createContext } from 'react';

const UserContext = createContext({
	user: {},
	isAutheticated: false,
	onLogin() {},
	onLogout() {},
});

export default UserContext;
