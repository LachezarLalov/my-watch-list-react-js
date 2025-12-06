import { Link } from 'react-router';
import { useUserContext } from '../contexts/UserContext';

export default function Header() {
	const { user } = useUserContext();

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Movies', href: '/catalog' },
		{ name: 'Directors', href: '/directors' },
		{ name: 'Search', href: '/search' },
	];

	return (
		<header className='z-100'>
			<nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
				{/* Left spacer (makes middle truly centered) */}
				<div className='flex flex-1 items-center'>
					<p className='mr-10'>{user ? `Welcome back, ${user?.username}!` : 'Welcome, stranger!'}</p>
				</div>

				{/* Center navigation */}
				<div className='flex justify-center flex-1'>
					{navigation.map((item) => (
						<Link key={item.name} to={item.href} className='hover:text-amber-300 text-2xl font-bold mx-5'>
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
