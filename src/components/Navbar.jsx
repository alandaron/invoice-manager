import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const links = [
		{
			name: "Home",
			to: "/",
		},
		{
			name: "About",
			to: "/about",
		},

		{
			name: "Services",
			to: "/services",
		},
		{
			name: "Login",
			to: "/login",
		},
	];
	return (
		<>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 md:rounded dark:bg-gray-900">
				<div className="container flex flex-wrap items-center justify-between mx-auto">
					<Link to="/" className="flex items-center">
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Document manager
						</span>
					</Link>
					<button
						type="button"
						className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
					</button>
					<div className="hidden w-full md:block md:w-auto" id="navbar-default">
						<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							{links.map(({ name, to }, index) => (
								<li key={index}>
									<NavLink
										to={to}
										className={({ isActive }) =>
											isActive
												? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
												: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
										}
									>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
