import { useParams, Route } from 'react-router-dom/cjs/react-router-dom.min';

import Comments from '../components/comments/Comments';

const JokeDetails = () => {
	const params = useParams();

	return (
		<>
			<h1>JokeDetails {params.jokeId}</h1>
			<Route path={`/jokes/${params.jokeId}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default JokeDetails;
