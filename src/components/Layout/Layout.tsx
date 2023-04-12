import React from 'react'
import { useNavigation, Outlet } from 'react-router-dom'
// import Footer from '../Footer/Footer'
import Header from '../Header/Header'




const Layout: React.FC = () => {
	const { state } = useNavigation()
	return (
		<>
			{state === 'loading' ? <div role="loader">Loading</div> : null}
			<Header />
			<main className="max-w-[1280px] mx-auto">
				<Outlet></Outlet>
			</main>
			{/* <Footer /> */}
		</>
	)
}

export default Layout