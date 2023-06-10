import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import styles from './NoJokesFound.module.css';

const NoJokesFound = () => {
	return (
		<div className={styles['no-jokes']}>
			<p>No Jokes Found!</p>
			<Link className="btn" to="/add-joke">
				Add a Joke
			</Link>
		</div>
	);
};

export default NoJokesFound;
