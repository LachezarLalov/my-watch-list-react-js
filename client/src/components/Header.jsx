import { Link } from 'react-router';

export default function Header() {
	const navigation = [
		// { name: 'Home', href: '/' },
		{ name: 'Movies', href: '/catalog' },
		{ name: 'Directors', href: '/directors' },
		// { name: 'Actors', href: '/directors' },
	];

	return (
		<header className='z-100'>
			<nav aria-label='Global' className='flex items-center justify-between p-6 lg:px-8'>
				<div className='flex flex-nowrap lg:glex-1'></div>
				<div className='flex items-center '>
					<Link to='/' className=''>
						<span className='sr-only'>Home</span>
						<img src='https://www.svgrepo.com/show/176284/cinema-screen.svg' className='h-10 invert' />
					</Link>
					{navigation.map((item) => (
						<Link key={item.name} to={item.href} className='text-2xl font-bold m-5'>
							{item.name}
						</Link>
					))}
				</div>
				<div className=''>
					{/* TODO show/hide login if registered user */}
					{
						<Link to='/login' className='text=sm/6 font-semibold'>
							Login in <span aria-hidden='true'>&rarr;</span>
						</Link>
					}
				</div>
			</nav>
		</header>
	);
}
