import { Link } from 'react-router';
import { useUserContext } from '../contexts/UserContext';

export default function Header() {
	const { user } = useUserContext();

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Movies', href: '/catalog' },
		{ name: 'Directors', href: '/directors' },
		// { name: 'Actors', href: '/directors' },
	];

	return (
		<header className='z-100'>
			<nav aria-label='Global' className='flex items-center justify-between aling-center p-6 lg:px-8'>
				<div className='flex flex-nowrap lg:glex-1'></div>
				<div className='flex text-1xl justify-center align-center items-center'>
					{user ? (
						<p className='mr-10'>{`Welcome back, ${user?.username}`}</p>
					) : (
						<p className='mr-10'>{`Welcome, stranger!`}</p>
					)}
				</div>

				<div className='flex justify-center flex-1'>
					{/* <Link to='/' className=''>
						<span className='sr-only'>Home</span>
						<img src='https://www.svgrepo.com/show/176284/cinema-screen.svg' className='hover:text-amber-300 h-10 invert' />
					</Link> */}
					{navigation.map((item) => (
						<Link key={item.name} to={item.href} className='hover:text-amber-300 text-2xl font-bold m-5'>
							{item.name}
						</Link>
					))}
				</div>

				<div className='flex align-center items-center'>
					{user ? (
						<Link to='/logout' className='hover:text-amber-300 text=sm/6 font-semibold'>
							Logout <span aria-hidden='true'>&rarr;</span>
						</Link>
					) : (
						<Link to='/login' className='hover:text-amber-300 text=sm/6 font-semibold'>
							Login in <span aria-hidden='true'>&rarr;</span>
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
}
