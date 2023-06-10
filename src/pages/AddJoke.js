import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import JokeForm from '../components/jokes/JokeForm';

const AddJoke = () => {
	const history = useHistory();

	const addJokeHandler = (jokeData) => {
		console.log(jokeData);

		history.push('/jokes');
	};

	return <JokeForm onAddJoke={addJokeHandler} />;
};

export default AddJoke;
