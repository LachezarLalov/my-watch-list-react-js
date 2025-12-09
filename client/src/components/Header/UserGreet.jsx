import { Link } from 'react-router';

export default function UserGreet({ user }) {
	return (
		<div className='flex flex-1 items-center'>
			<p className='mr-10'>
				{user ? (
					<>
						Welcome back, <Link className='font-bold' to={`/profile`}>{user.username}</Link>
					</>
				) : (
					'Welcome, stranger!'
				)}
			</p>
		</div>
	);
}
