import React, { useEffect, useState } from 'react';
import './cardNotification.css';

export function CardNotification({ user, countN }) {
	const { firstName, lastName, avatar, notification } = user;
	const { type, post, group, picture, message, time } = notification;

	const [newNotification, setNewNotification] = useState('newNotification');
	const [point, setPoint] = useState('point-block');

	function display() {
		setNewNotification('');
		setPoint('');
	}

	useEffect(() => {
		countN(document.getElementsByClassName('newNotification').length);
	}, [newNotification]);

	const none = 'hidden';

	return (
		<div className={`contentNotification ${newNotification}`} onClick={display}>
			<div className="cardNotification ">
				<div className="avatar">
					<picture>
						<source srcset={avatar.avif} type="image/avif" />
						<source srcset={avatar.webp} type="image/webp" />
						<img src={avatar.jpg} alt={`${firstName} ${lastName}`} />
					</picture>
				</div>

				<div className="info">
					<p className="data-info">
						<span className="name">{`${firstName} ${lastName} `}</span>

						<span className="type">{`${type} `}</span>

						<span className={post.length === 0 ? none : 'post'}> {`${post}`}</span>

						<span className={group.length === 0 ? none : 'group'}> {`${group}`}</span>
						<span className={`point ${point}`}></span>
					</p>

					<p className="time">{time}</p>
				</div>

				<div className={picture.length === 0 ? none : 'picture'}>
					<picture>
						<source srcset={picture.avif} type="image/avif" />
						<source srcset={picture.webp} type="image/webp" />
						<img src={picture.jpg} alt="picture" />
					</picture>
				</div>
			</div>

			<div className={message.length === 0 ? none : 'message'}>
				<p className="message-text">{`${message}`}</p>
			</div>
		</div>
	);
}
