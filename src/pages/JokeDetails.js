import {
	useParams,
	Route,
	Link,
	useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';

import HighlightedJoke from '../components/jokes/HighlightedJoke';
import Comments from '../components/comments/Comments';

const DUMMY_JOKES = [
	{
		id: 'j1',
		topic: 'Programming',
		text: 'eserunt distinctio dicta consequuntur eius pariatur, magnam libero nulla voluptates. Mollitia excepturi nostrum nisi?',
	},
	{
		id: 'j2',
		topic: 'General',
		text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore saepe accusamus ullam quos maiores porro nostrum, deserunt distinctio dicta ',
	},
];

const JokeDetails = () => {
	const routeMatch = useRouteMatch();
	const params = useParams();

	const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

	if (!joke) {
		return <h1 className="centered">Шуток не найдено</h1>;
	}

	return (
		<>
			<HighlightedJoke text={joke.text} topic={joke.topic} />
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
