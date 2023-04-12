import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import ContactsPage from '../pages/ContactsPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'



// type RouteElement = {
//     path: string;
//     element: JSX.Element;
//     errorElement?: JSX.Element;
//     children?: RouteElement[];
//     index?: boolean;
//   };


export const routing = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: '/contacts',
				element: <ContactsPage />
			}
		]
	}
])