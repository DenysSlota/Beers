import { NavLink } from 'react-router-dom'

const Header: React.FC  = () => {
	return (
		<header className="bg-gray-800 fixed top-0 left-0 right-0 z-10">
			<div className="h-[80px] flex justify-between items-center max-w-[1280px] mx-auto px-10">
				<div className="text-white text-[20px] cursor-default">New router</div>
				<div className="flex items-center space-x-5">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
					{/* <SwitchTheme />
					<LogUser /> */}
				</div>
			</div>
		</header>
	)
}

export default Header