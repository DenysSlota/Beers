import { useRouteError } from 'react-router-dom'



const ErrorPage: React.FC = () => {
	const error = useRouteError()
	console.error(error)

	return (
		<div className="p-8">
			<h1 className="p-8">Oops!</h1>
			<p className="mb-4">Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
export default ErrorPage