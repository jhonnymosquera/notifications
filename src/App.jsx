import { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Notifications from './components/notifications/Notifications';
import './app.css';

export function App() {
	const notis = document.querySelectorAll('.newNotification');
	const points = document.querySelectorAll('.point-block');

	const [count, setCount] = useState();
	const [ok, setOk] = useState(0);

	function countN(count) {
		setCount(count);
	}

	function allRead() {
		notis.forEach((noti) => {
			noti.classList.remove('newNotification');
		});

		points.forEach((point) => {
			point.classList.remove('point-block');
		});

		setOk(ok + 1);
	}

	useEffect(() => {
		countN(notis.length);
	}, [ok]);

	return (
		<div className="container">
			<Header count={count} allRead={allRead} />
			<Notifications countN={countN} />
		</div>
	);
}
