import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

import useHttp from '../components/hooks/use-http';
import { addJoke } from '../utils/firebase-api';
import JokeForm from '../components/jokes/JokeForm';

const AddJoke = () => {
	const history = useHistory();

	const { sendHttpRequest, status } = useHttp(addJoke);

	useEffect(() => {
		if (status === 'completed') {
			history.push('/jokes');
		}
	}, [status, history]);

	const addJokeHandler = (jokeData) => {
		sendHttpRequest(jokeData);
	};

	return <JokeForm onAddJoke={addJokeHandler} isLoading={status === 'pending'} />;
};

export default AddJoke;
