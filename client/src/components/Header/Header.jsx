import { Link } from 'react-router';
import { useUserContext } from '../../contexts/UserContext';
import UserGreet from './UserGreet';

export default function Header() {
	const { user } = useUserContext();
	const isAuth = user && user.isAuthenticated;

	// TODO dynamicly hide current page
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: "Top 10's", href: '/toptens' },
		{ name: 'Movies', href: '/catalog' },
		{ name: 'Directors', href: '/directors' },
		{ name: 'Search', href: '/search' },
		...(isAuth ? [{ name: 'Add movie', href: '/movies/create' }] : []),
	];

	return (
		<header className=' fixed z-100 top-0 left-0 w-full h-20  bg-stone-900/80 w-full backdrop-blur-sm'>
			<nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
				<UserGreet user={user} />

				{/* Center navigation */}
				<div className=' flex whitespace-nowrap justify-center flex-1'>
					{navigation.map((item) => (
						<Link key={item.name} to={item.href} className='hover:text-amber-400 text-xl font-bold mx-5'>
							{item.name}
						</Link>
					))}
				</div>

				{/* Right side */}
				<div className='flex flex-1 justify-end items-center'>
					{user ? (
						<Link
							to='/logout'
							className='text-1xl hover:text-amber-300 font-semibold
						transition-all duration-300 ease-in-out hover:shadow-amber-600/100 shadow-2xs
						'
						>
							Logout
						</Link>
					) : (
						<Link to='/login' className='text-1xl hover:text-amber-300  font-semibold'>
							Login
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
}
