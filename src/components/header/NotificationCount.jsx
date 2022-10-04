function NotificationCount({ count }) {
	return (
		<div className="notificationCount">
			<h1>Notifications</h1>

			<div className="count">
				<p>{count}</p>
			</div>
		</div>
	);
}

export default NotificationCount;
