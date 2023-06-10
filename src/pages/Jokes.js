import JokeList from '../components/jokes/JokeList';

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

const Jokes = () => {
	return <JokeList jokes={DUMMY_JOKES} />;
};

export default Jokes;
