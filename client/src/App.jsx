import { Route, Routes } from 'react-router';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import MovieCatalog from './components/Movies/MovieCatalog';
import Directors from './components/Directors/Directors';
import UserLogin from './components/User/UserLogin';
import UserRegister from './components/User/UserRegister';
import UserLogout from './components/User/UserLogout';
import { UserProvider } from './contexts/UserContext';
import Search from './components/Search';
import RouteGuard from './components/RouteGuard';

function App() {
	return (
		<UserProvider>
			<div className='text-white w-full min-h-screen bg-cover bg-no-repeat bg-[url("/background.jpg")] flex flex-col '>
				<div className='absolute inset-0 bg-stone-900/80 blur-3xl'></div>

				<Header className='flex-shrink-0' />

				<div className='flex items-center flex-grow justify-center mx-[10%]'>
					<Routes>
						<Route index element={<Home />} />
						<Route path='/catalog' element={<MovieCatalog />} />
						<Route path='/directors' element={<Directors />} />
						<Route path='/login' element={<UserLogin />} />

						<Route element={<RouteGuard />}>
							<Route path='/search' element={<Search />} />
							<Route path='/register' element={<UserRegister />} />
							<Route path='/logout' element={<UserLogout />} />
						</Route>
					</Routes>
				</div>

				<Footer />
			</div>
		</UserProvider>
	);
}

export default App;
