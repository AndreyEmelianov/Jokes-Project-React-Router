import {
	useParams,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';

import useHttp from '../components/hooks/use-http';
import { getJoke } from '../utils/firebase-api';
import HighlightedJoke from '../components/jokes/HighlightedJoke';
import Comments from '../components/comments/Comments';
import { useEffect } from 'react';
import Loader from '../components/UI/Loader';

const JokeDetails = () => {
	const routeMatch = useRouteMatch();
	const params = useParams();
	const { jokeId } = params;

	const { sendHttpRequest, status, data: loadedJoke, error } = useHttp(getJoke, true);

	useEffect(() => {
		sendHttpRequest(jokeId);
	}, [sendHttpRequest, jokeId]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<Loader />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (!loadedJoke.text) {
		return <h1 className="centered">Joke not found</h1>;
	}

	return (
		<>
			<HighlightedJoke text={loadedJoke.text} topic={loadedJoke.topic} />
			<Route path={`${routeMatch.path}`} exact>
				<div className="centered">
					<Link className="btn--empty" to={`${routeMatch.url}/comments`}>
						Show Comments
					</Link>
				</div>
			</Route>
			<Route path={`${routeMatch.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default JokeDetails;
