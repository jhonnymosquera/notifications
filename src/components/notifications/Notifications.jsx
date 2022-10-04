import React, { useContext } from 'react';
import { Context } from '../../context/Context';
import { CardNotification } from './CardNotification.jsx';

function Notifications({ countN }) {
	const { users } = useContext(Context);

	if (users.length === 0) {
		return <h1>Sin notificaciones</h1>;
	}

	return (
		<main className="main">
			{users.map((user) => {
				return <CardNotification user={user} key={user.id} countN={countN} />;
			})}
		</main>
	);
}

export default Notifications;
